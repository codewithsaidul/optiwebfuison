import Sidebar from "@/component/Dashboard/Sidebar";



export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Dashboard</title>
        {/* <meta name="description" content={metadata.description} /> */}
      </head>

      <body className={`font-montserrat dark:bg-gray-900 bg-white`}>
        <div className="flex">
          <Sidebar />
          <main>{children}</main>
        </div>
        
      </body>
    </html>
  );
}
