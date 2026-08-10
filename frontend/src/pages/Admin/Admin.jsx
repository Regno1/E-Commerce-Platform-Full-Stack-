import { useEffect, useState } from "react";
import { getProducts, createProduct, updateProduct, deleteProduct } from "../../api/productApi";
import { getMyOrders, updateOrderStatus } from "../../api/orderApi";
import toast from "react-hot-toast";

const Admin = () => {
  const [tab, setTab] = useState("products");
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [productForm, setProductForm] = useState({
    name: "", description: "", price: "", stock: "",
    imageUrl: "", brand: "", category: "", rating: "",
  });

  // Fetch products
  const fetchProducts = async () => {
    try {
      const res = await getProducts({ size: 100 });
      setProducts(res.data.content || []);
    } catch {
      setProducts([]);
    }
  };

  // Fetch orders
  const fetchOrders = async () => {
    try {
      const res = await getMyOrders();
      setOrders(res.data || []);
    } catch {
      setOrders([]);
    }
  };

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      await Promise.all([fetchProducts(), fetchOrders()]);
      setLoading(false);
    };
    load();
  }, []);

  // Product form handlers
  const resetForm = () => {
    setProductForm({
      name: "", description: "", price: "", stock: "",
      imageUrl: "", brand: "", category: "", rating: "",
    });
    setEditingProduct(null);
  };

  const openAddModal = () => {
    resetForm();
    setShowModal(true);
  };

  const openEditModal = (p) => {
    setEditingProduct(p);
    setProductForm({
      name: p.name || "",
      description: p.description || "",
      price: p.price?.toString() || "",
      stock: p.stock?.toString() || "",
      imageUrl: p.imageUrl || "",
      brand: p.brand || "",
      category: p.category || "",
      rating: p.rating?.toString() || "",
    });
    setShowModal(true);
  };

  const handleFormChange = (e) => {
    setProductForm({ ...productForm, [e.target.name]: e.target.value });
  };

  const handleSaveProduct = async (e) => {
    e.preventDefault();
    const data = {
      name: productForm.name,
      description: productForm.description,
      price: parseFloat(productForm.price) || 0,
      stock: parseInt(productForm.stock) || 0,
      imageUrl: productForm.imageUrl,
      brand: productForm.brand,
      category: productForm.category,
      rating: parseFloat(productForm.rating) || 0,
    };
    try {
      if (editingProduct) {
        await updateProduct(editingProduct.id, data);
        toast.success("Product updated!");
      } else {
        await createProduct(data);
        toast.success("Product created!");
      }
      setShowModal(false);
      resetForm();
      await fetchProducts();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to save product");
    }
  };

  const handleDeleteProduct = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      await deleteProduct(id);
      toast.success("Product deleted!");
      await fetchProducts();
    } catch {
      toast.error("Failed to delete product");
    }
  };

  const handleStatusChange = async (orderId, status) => {
    try {
      await updateOrderStatus(orderId, status);
      toast.success("Order status updated!");
      await fetchOrders();
    } catch {
      toast.error("Failed to update status");
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString("en-IN", {
      day: "numeric", month: "short", year: "numeric",
    });
  };

  const getStatusClass = (s) => (s || "").toLowerCase();

  const stats = [
    { icon: "📦", label: "Total Products", value: products.length },
    { icon: "🛒", label: "Total Orders", value: orders.length },
    { icon: "✅", label: "Delivered", value: orders.filter((o) => o.status === "DELIVERED").length },
    { icon: "⏳", label: "Pending", value: orders.filter((o) => o.status === "PENDING").length },
  ];

  if (loading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="admin-page">
      {/* Header */}
      <div className="admin-header">
        <h1 className="page-title">Admin Dashboard</h1>
        <span className="admin-badge">Admin</span>
      </div>

      {/* Stats */}
      <div className="admin-grid">
        {stats.map((stat) => (
          <div className="admin-stat-card" key={stat.label}>
            <div className="admin-stat-icon">{stat.icon}</div>
            <div className="admin-stat-value">{stat.value}</div>
            <div className="admin-stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="admin-tabs">
        <button
          className={`admin-tab${tab === "products" ? " active" : ""}`}
          onClick={() => setTab("products")}
        >
          📦 Products
        </button>
        <button
          className={`admin-tab${tab === "orders" ? " active" : ""}`}
          onClick={() => setTab("orders")}
        >
          🛒 Orders
        </button>
      </div>

      {/* Products Tab */}
      {tab === "products" && (
        <div className="admin-table-wrap">
          <div className="admin-table-header">
            <span className="admin-table-title">All Products ({products.length})</span>
            <button className="btn-primary btn-sm" onClick={openAddModal}>
              + Add Product
            </button>
          </div>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id}>
                  <td>
                    <img
                      src={p.imageUrl}
                      alt={p.name}
                      className="admin-table-img"
                    />
                  </td>
                  <td style={{ fontWeight: 600 }}>{p.name}</td>
                  <td>{p.category}</td>
                  <td>₹{parseFloat(p.price || 0).toLocaleString("en-IN")}</td>
                  <td>{p.stock}</td>
                  <td>
                    <div className="admin-table-actions">
                      <button
                        className="btn-outline btn-sm"
                        onClick={() => openEditModal(p)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn-danger btn-sm"
                        onClick={() => handleDeleteProduct(p.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Orders Tab */}
      {tab === "orders" && (
        <div className="admin-table-wrap">
          <div className="admin-table-header">
            <span className="admin-table-title">All Orders ({orders.length})</span>
          </div>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Items</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.orderID}>
                  <td style={{ fontWeight: 700 }}>#{o.orderID}</td>
                  <td>{formatDate(o.createdAt)}</td>
                  <td>{(o.items || []).length} items</td>
                  <td style={{ fontWeight: 600 }}>
                    ₹{parseFloat(o.totalAmount || 0).toLocaleString("en-IN")}
                  </td>
                  <td>
                    <select
                      className="status-select"
                      value={o.status}
                      onChange={(e) => handleStatusChange(o.orderID, e.target.value)}
                    >
                      <option value="PENDING">PENDING</option>
                      <option value="CONFIRMED">CONFIRMED</option>
                      <option value="SHIPPED">SHIPPED</option>
                      <option value="DELIVERED">DELIVERED</option>
                      <option value="CANCELLED">CANCELLED</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Product Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">
                {editingProduct ? "Edit Product" : "Add New Product"}
              </h3>
              <button className="modal-close" onClick={() => setShowModal(false)}>
                ✕
              </button>
            </div>
            <form onSubmit={handleSaveProduct}>
              <div className="modal-body">
                <div className="auth-form">
                  <div className="form-group">
                    <label className="form-label">Name</label>
                    <input
                      name="name"
                      className="form-input"
                      value={productForm.name}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Description</label>
                    <input
                      name="description"
                      className="form-input"
                      value={productForm.description}
                      onChange={handleFormChange}
                    />
                  </div>
                  <div className="checkout-form-row">
                    <div className="form-group">
                      <label className="form-label">Price (₹)</label>
                      <input
                        name="price"
                        type="number"
                        className="form-input"
                        value={productForm.price}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Stock</label>
                      <input
                        name="stock"
                        type="number"
                        className="form-input"
                        value={productForm.stock}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Image URL</label>
                    <input
                      name="imageUrl"
                      className="form-input"
                      value={productForm.imageUrl}
                      onChange={handleFormChange}
                    />
                  </div>
                  <div className="checkout-form-row">
                    <div className="form-group">
                      <label className="form-label">Brand</label>
                      <input
                        name="brand"
                        className="form-input"
                        value={productForm.brand}
                        onChange={handleFormChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Category</label>
                      <input
                        name="category"
                        className="form-input"
                        value={productForm.category}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group" style={{ maxWidth: "120px" }}>
                    <label className="form-label">Rating</label>
                    <input
                      name="rating"
                      type="number"
                      step="0.1"
                      max="5"
                      className="form-input"
                      value={productForm.rating}
                      onChange={handleFormChange}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn-outline"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  {editingProduct ? "Update" : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;