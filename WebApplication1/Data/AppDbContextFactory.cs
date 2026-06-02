//using Microsoft.EntityFrameworkCore;
//using Microsoft.EntityFrameworkCore.Design;
//using WebApplication1.Data;

//namespace WebApplication1.Data
//{
//    public class AppDbContextFactory : IDesignTimeDbContextFactory<AppDbContext>
//    {
//        public AppDbContext CreateDbContext(string[] args)
//        {
//            var optionsBuilder = new DbContextOptionsBuilder<AppDbContext>();

//            // Added @ and fixed the backslashes/trailing quote
//            optionsBuilder.UseSqlServer(
//               @"Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=LoginPrac;Integrated Security=True;Connect Timeout=30;Encrypt=True;Trust Server Certificate=False;");

//            return new AppDbContext(optionsBuilder.Options);
//        }
//    }
//}


using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using WebApplication1.Data;

namespace WebApplication1.Data
{
    public class AppDbContextFactory : IDesignTimeDbContextFactory<AppDbContext>
    {
        public AppDbContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<AppDbContext>();

            optionsBuilder.UseSqlite("Data Source=miniwebsite.db");

            return new AppDbContext(optionsBuilder.Options);
        }
    }
}



