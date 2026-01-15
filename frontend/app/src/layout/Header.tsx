export const Header = () => {
  const HEADER_LABELS = {
    title: "Dashboard",
    Logged: "Logged in as: ",
    usr: "David",
  };
  return (
    <header
      style={{
        height: 56,
        padding: "0 16px",
        borderBottom: "1px solid #eee",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ fontWeight: 600 }}>{HEADER_LABELS.title}</div>
      <div>
        {HEADER_LABELS.Logged}
        {HEADER_LABELS.usr}
      </div>
    </header>
  );
};
