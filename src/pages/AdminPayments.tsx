import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft, Loader2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface PaymentRecord {
  id: string;
  user_id: string;
  payment_status: string;
  updated_at: string;
  profile?: {
    full_name: string | null;
    email: string | null;
  };
}

const AdminPayments = () => {
  const navigate = useNavigate();
  const [payments, setPayments] = useState<PaymentRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdminAndFetch = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        navigate("/auth");
        return;
      }

      // Check if user is admin using the secure has_role function
      const { data: isUserAdmin } = await supabase.rpc("has_role", {
        _role: "admin",
        _user_id: user.id,
      });

      if (!isUserAdmin) {
        navigate("/dashboard");
        return;
      }

      setIsAdmin(true);

      // Fetch all paid employee profiles with their user profiles
      const { data: employeeProfiles } = await supabase
        .from("employee_profiles")
        .select("id, user_id, payment_status, updated_at")
        .eq("payment_status", "paid")
        .order("updated_at", { ascending: false });

      if (employeeProfiles) {
        // Fetch corresponding user profiles
        const userIds = employeeProfiles.map(ep => ep.user_id);
        const { data: profiles } = await supabase
          .from("profiles")
          .select("id, full_name, email")
          .in("id", userIds);

        const profileMap = new Map(profiles?.map(p => [p.id, p]) || []);
        
        const paymentsWithProfiles = employeeProfiles.map(ep => ({
          ...ep,
          profile: profileMap.get(ep.user_id) || { full_name: null, email: null }
        }));

        setPayments(paymentsWithProfiles);
      }

      setLoading(false);
    };

    checkAdminAndFetch();
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border/50">
        <div className="apple-container">
          <div className="flex items-center h-14">
            <Link to="/dashboard" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm">Dashboard</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="apple-container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-semibold mb-8">Payment Records</h1>

          {payments.length === 0 ? (
            <div className="apple-card p-12 text-center">
              <p className="text-muted-foreground">No verified payments yet.</p>
            </div>
          ) : (
            <div className="apple-card overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {payments.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell className="font-medium">
                        {payment.profile?.full_name || "—"}
                      </TableCell>
                      <TableCell>
                        {payment.profile?.email || "—"}
                      </TableCell>
                      <TableCell>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                          Paid
                        </span>
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {payment.updated_at 
                          ? new Date(payment.updated_at).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })
                          : "—"}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPayments;
