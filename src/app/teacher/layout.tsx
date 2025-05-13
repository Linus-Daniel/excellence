
import TeacherSidebar from "@/components/teacher/sideBar";
import TeacherNavbar from "@/components/teacher/navBar";


export default function TeacherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   
        <div className="flex h-screen">
          {/* Sidebar */}
          <TeacherSidebar />
          
          {/* Main Content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Navbar */}
            <TeacherNavbar />
            
            {/* Page Content */}
            <main className="flex-1 overflow-y-auto p-6">
              {children}
            </main>
          </div>
        </div>
    
  );
}