import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h4>Header</h4>
        {children}
        <h4>Footer</h4>
      </body>
    </html>
  );
}
