import ShoppingLayout from "./components/shopping-view/layout";
import AdminProducts from "./pages/admin-view/product";
import NotFound from "./pages/not-found";
import ShoppingAccount from "./pages/shopping-view/account";
import ShoppingCheckout from "./pages/shopping-view/checkout";
import ShoppingHome from "./pages/shopping-view/home";
import ShoppingListing from "./pages/shopping-view/listing";

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <h1>Header Component</h1> 
      <Routes>
      <Route path="/auth" element={<AuthLayout/>} >
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
      </Route>
      <Route path="/admin" element={<AuthAdmin/>} >
          <Route path="/dashboard" element={<AdminDashboard/>} />
          <Route path="/features" element={<AdminFeatures/>} />
          <Route path="/products" element={<AdminProducts/>} />
          <Route path="/orders" element={<AdminOrders/>} />
      </Route>
      <Route path="/shop" element={<ShoppingLayout/>} >
          <Route path="/listing" element={<ShoppingListing/>} />
          <Route path="/home" element={<ShoppingHome/>} />
          <Route path="/checkout" element={<ShoppingCheckout/>} />
          <Route path="/account" element={<ShoppingAccount/>} />

      </Route>
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </div>
  );
}

export default App;