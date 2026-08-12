"use client";
import { useState, useEffect } from 'react';

export default function AccountForm() {
  const [formData, setFormData] = useState({
    name: 'Sreynich Vann',
    phone: '096421964',
    location: 'Phnom Penh',
    address: 'RUPP, Phnom Penh'
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('kith_user_account');
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('kith_user_account', JSON.stringify(formData));
    setIsEditing(false);
  };

  return (
    <div style={{ width: "100%", fontFamily: "inherit" }}>
      {/* Profile Header Card */}
      <div style={{
        background: "#ffffff",
        padding: "35px 40px",
        borderRadius: "16px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "25px",
        border: "1px solid #f0e6e4",
        width: "100%",
        boxSizing: "border-box"
      }}>
        <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
          <div style={{
            width: "90px",
            height: "90px",
            borderRadius: "50%",
            background: "#b07d76",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "36px",
            fontWeight: "600",
            flexShrink: 0
          }}>
            {formData.name ? formData.name.charAt(0).toUpperCase() : "S"}
          </div>
          <div>
            <h2 style={{ margin: "0 0 6px 0", color: "var(--heading)", fontSize: "28px" }}>{formData.name}</h2>
            <p style={{ margin: "0 0 12px 0", color: "var(--muted)", fontSize: "15px" }}>Student Account</p>
            
            {/* Info with Clean SVG Icons */}
            <div style={{ display: "flex", gap: "25px", color: "var(--muted)", fontSize: "14px", flexWrap: "wrap" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                {formData.location}
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                {formData.phone}
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                {formData.address}
              </span>
            </div>
          </div>
        </div>

        <button 
          onClick={() => setIsEditing(!isEditing)} 
          style={{
            background: "transparent",
            border: "1px solid #b07d76",
            color: "#b07d76",
            padding: "10px 24px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "500",
            flexShrink: 0,
            fontSize: "14px"
          }}
        >
          {isEditing ? "Cancel" : "Edit Profile"}
        </button>
      </div>

      {/* Edit Form or Info Grid Cards */}
      {isEditing ? (
        <form onSubmit={handleSubmit} style={{
          background: "#ffffff",
          padding: "35px 40px",
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
          border: "1px solid #f0e6e4",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          width: "100%",
          boxSizing: "border-box",
          marginBottom: "25px"
        }}>
          <h3 style={{ margin: "0 0 10px 0", color: "var(--heading)", fontSize: "20px" }}>Update Profile Details</h3>
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "14px" }} />
          <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "14px" }} />
          <input name="location" value={formData.location} onChange={handleChange} placeholder="City / Province" required style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "14px" }} />
          <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Full Address" rows="3" required style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "14px", resize: "none" }} />
          <button type="submit" className="btn btn-primary" style={{ padding: "12px", fontSize: "14px" }}>Save Changes</button>
        </form>
      ) : (
        <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(3, 1fr)", 
            gap: "20px",
            width: "100%",
            boxSizing: "border-box"
        }}>
          <div style={{ background: "#fff", padding: "25px", borderRadius: "12px", textAlign: "center", border: "1px solid #f0e6e4" }}>
            <h4 style={{ margin: "0 0 8px 0", color: "var(--muted)", fontSize: "14px", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              Location
            </h4>
            <p style={{ margin: 0, fontSize: "18px", fontWeight: "600", color: "var(--heading)" }}>{formData.location}</p>
          </div>
          <div style={{ background: "#fff", padding: "25px", borderRadius: "12px", textAlign: "center", border: "1px solid #f0e6e4" }}>
            <h4 style={{ margin: "0 0 8px 0", color: "var(--muted)", fontSize: "14px", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Phone Number
            </h4>
            <p style={{ margin: 0, fontSize: "18px", fontWeight: "600", color: "var(--heading)" }}>{formData.phone}</p>
          </div>
          <div style={{ background: "#fff", padding: "25px", borderRadius: "12px", textAlign: "center", border: "1px solid #f0e6e4" }}>
            <h4 style={{ margin: "0 0 8px 0", color: "var(--muted)", fontSize: "14px", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              Address
            </h4>
            <p style={{ margin: 0, fontSize: "18px", fontWeight: "600", color: "var(--heading)" }}>{formData.address}</p>
          </div>
        </div>
      )}
    </div>
  );
}