import { useLocation } from "react-router-dom";
import OrderSuccess from "../components/OrderSuccess";

export default function SuccessPage() {
  const location = useLocation();
  const orderDetails = location.state?.orderDetails;

  return <OrderSuccess orderDetails={orderDetails} />;
}