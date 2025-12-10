# GlobID Motion & Sound Design Specification

## Apple-Standard Motion Design

### Core Animation Principles

1. **Timing Functions**
   - Primary easing: `cubic-bezier(0.4, 0, 0.2, 1)` — smooth, natural deceleration
   - Spring easing: `cubic-bezier(0.34, 1.56, 0.64, 1)` — subtle bounce for emphasis
   - Quick response: `cubic-bezier(0.2, 0, 0, 1)` — snappy interactions

2. **Duration Guidelines**
   - Micro-interactions: 120-200ms (checkmarks, toggles)
   - Standard transitions: 300ms (modals, page content)
   - Complex animations: 400-600ms (verification sequences)
   - Fade effects: 200-300ms

### Verification Modal Animation

```
Timeline:
0ms     → Modal appears (scale: 0.95 → 1.0, opacity: 0 → 1)
0-700ms → "Scanning…" state (progress ring: 0% → 35%)
700ms   → "Validating…" state (progress ring: 35% → 80%)
1400ms  → "Verified ✓" state (progress ring: 80% → 100%)
1400ms  → Checkmark pop animation (scale: 0.5 → 1.1 → 1.0)
1800ms  → Modal dismisses (scale: 1.0 → 0.95, opacity: 1 → 0)
```

### Checkmark Pop Animation

```css
@keyframes verifyPop {
  0%   { opacity: 0; transform: scale(0.5); }
  70%  { transform: scale(1.1); }
  100% { opacity: 1; transform: scale(1.0); }
}
Duration: 120ms
Easing: ease-out
```

### Verification Pulse Glow

```css
@keyframes verifyPulse {
  0%   { box-shadow: 0 0 0 0 rgba(0, 208, 111, 0.4); }
  50%  { box-shadow: 0 0 0 6px rgba(0, 208, 111, 0.2); }
  100% { box-shadow: 0 0 0 0 rgba(0, 208, 111, 0); }
}
Duration: 400ms
Easing: ease-out
```

### Progress Ring Animation

- Stroke dasharray based on circumference: `2 * π * 36 = 226.2`
- Smooth stroke-dashoffset transition with 300ms ease-out
- Apple Watch-style curved motion (smooth, continuous)

---

## Sound Design Specification

### Overview
Sound should be optional, subtle, and premium. Never obtrusive.

### Verification Success Sound
- **Character**: Soft, crystalline chime
- **Frequency**: 880Hz → 1760Hz (A5 → A6)
- **Duration**: 180ms
- **Profile**: Quick attack (10ms), smooth decay
- **Reference**: iOS keyboard confirmation, slightly brighter

### Upload Complete Sound
- **Character**: Gentle ascending tone
- **Frequency**: 523Hz → 659Hz (C5 → E5)
- **Duration**: 150ms
- **Profile**: Soft attack, natural decay

### Error Sound
- **Character**: Low, soft thud
- **Frequency**: 220Hz
- **Duration**: 120ms
- **Profile**: Rounded, non-jarring

### Implementation Notes

1. **Volume**: Always ≤30% of system volume
2. **Haptics**: Pair sounds with subtle haptic feedback on mobile (UIImpactFeedbackGenerator.light)
3. **User Preference**: Respect system "reduce motion" and "mute" settings
4. **Format**: Use Web Audio API for precise timing, fallback to `<audio>` elements

### Web Audio API Example

```typescript
const playVerificationSound = () => {
  const ctx = new AudioContext();
  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);
  
  oscillator.frequency.setValueAtTime(880, ctx.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(1760, ctx.currentTime + 0.18);
  
  gainNode.gain.setValueAtTime(0.15, ctx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.18);
  
  oscillator.start(ctx.currentTime);
  oscillator.stop(ctx.currentTime + 0.18);
};
```

---

## Color Specifications

### Verification Green
- **Primary**: `#00D06F` (hsl: 151, 100%, 41%)
- **Glow**: `rgba(0, 208, 111, 0.4)`
- **Background tint**: `rgba(0, 208, 111, 0.1)`

### Status Indicators
- **Verified**: `#00D06F` (green)
- **Pending**: `hsl(var(--muted-foreground))` (gray)
- **Waiting**: `#FBBF24` (amber)
- **Error**: `hsl(var(--destructive))` (red)

---

## Typography in Modals

- **Status text**: 18px, font-weight: 500, tracking: -0.01em
- **Font stack**: SF Pro Display fallback system
- **Color**: `hsl(var(--foreground))`

---

## Accessibility

- Animations respect `prefers-reduced-motion`
- Checkmarks use sufficient color contrast (4.5:1 minimum)
- Modal has appropriate ARIA labels
- Focus management on modal open/close
