// ============================================================================
// Web Technology Laboratory - Experiment 9
// Topic: Working with MongoDB Using Shell Commands (mongosh) & Compass
// Student: Gautham Manoj (URK24CS1158)
// Database: collegeDB | Collection: students
// ============================================================================

// 1. Check existing databases
show dbs;

// 2. Switch to / Create collegeDB
use collegeDB;

// 3. Confirm current database
db;

// 4. Create collection 'students'
db.createCollection("students");

// 5. Verify collections
show collections;

// 6. Insert single student document
db.students.insertOne({
  rollno: 201,
  name: "Arun",
  department: "CSE",
  year: 3,
  marks: 90,
  city: "Chennai",
  status: "Active"
});

// 7. Insert multiple student documents (Sample batch)
db.students.insertMany([
  { rollno: 202, name: "Priya", department: "ECE", year: 3, marks: 92, city: "Coimbatore" },
  { rollno: 203, name: "Karthik", department: "CSE", year: 2, marks: 78, city: "Salem", status: "Active" },
  { rollno: 204, name: "Meena", department: "EEE", year: 3, marks: 88, city: "Madurai" },
  { rollno: 205, name: "Suresh", department: "MECH", year: 4, marks: 75, city: "Trichy", status: "Active" },
  { rollno: 206, name: "Divya", department: "CSE", year: 2, marks: 85, city: "Chennai", status: "Active" },
  { rollno: 207, name: "Vignesh", department: "IT", year: 3, marks: 95, city: "Coimbatore", status: "Active" },
  { rollno: 208, name: "Ananya", department: "ECE", year: 1, marks: 82, city: "Bangalore" },
  { rollno: 209, name: "Rahul", department: "CSE", year: 4, marks: 70, city: "Hyderabad", status: "Active" },
  { rollno: 210, name: "Sneha", department: "AIDS", year: 2, marks: 91, city: "Chennai", status: "Active" },
  { rollno: 211, name: "Gokul", department: "IT", year: 3, marks: 84, city: "Madurai", status: "Active" },
  { rollno: 212, name: "Harini", department: "CSE", year: 3, marks: 89, city: "Salem", status: "Active" },
  { rollno: 213, name: "Sanjay", department: "MECH", year: 2, marks: 68, city: "Tirunelveli" },
  { rollno: 214, name: "Pooja", department: "ECE", year: 4, marks: 93, city: "Coimbatore", status: "Active" },
  { rollno: 215, name: "Naveen", department: "EEE", year: 1, marks: 76, city: "Chennai" },
  { rollno: 216, name: "Keerthi", department: "AIDS", year: 3, marks: 87, city: "Trichy", status: "Active" },
  { rollno: 217, name: "Vijay", department: "CSE", year: 4, marks: 96, city: "Chennai", status: "Active" },
  { rollno: 218, name: "Rithika", department: "IT", year: 2, marks: 81, city: "Salem", status: "Active" },
  { rollno: 219, name: "Manoj", department: "ECE", year: 3, marks: 86, city: "Madurai", status: "Active" }
]);

// 8. Retrieve all documents
db.students.find();

// 9. Find single document by rollno
db.students.findOne({ rollno: 201 });

// 10. Filter by Department
db.students.find({ department: "CSE" });

// 11. Comparison Operators:
// Greater than ($gt)
db.students.find({ marks: { $gt: 80 } });

// Greater than or equal ($gte)
db.students.find({ marks: { $gte: 85 } });

// Less than ($lt)
db.students.find({ marks: { $lt: 80 } });

// Less than or equal ($lte)
db.students.find({ marks: { $lte: 75 } });

// Not equal ($ne)
db.students.find({ marks: { $ne: 90 } });

// In array ($in)
db.students.find({ department: { $in: ["CSE", "IT", "AIDS"] } });

// Not in array ($nin)
db.students.find({ department: { $nin: ["MECH", "EEE"] } });

// 12. Logical Operators:
// Implicit AND
db.students.find({ department: "CSE", marks: { $gt: 80 } });

// Explicit $or
db.students.find({
  $or: [
    { department: "CSE" },
    { department: "ECE" }
  ]
});

// 13. Projection: Return only name & marks without _id
db.students.find({}, { name: 1, marks: 1, department: 1, _id: 0 });

// 14. Sorting: Ascending (1) & Descending (-1)
db.students.find().sort({ marks: 1 });
db.students.find().sort({ marks: -1 });

// 15. Limit & Pagination
db.students.find().sort({ marks: -1 }).limit(5);
db.students.find().skip(5).limit(5);

// 16. Document Count
db.students.countDocuments({});
db.students.countDocuments({ department: "CSE" });

// 17. Update Operations:
// Update one record
db.students.updateOne(
  { rollno: 201 },
  { $set: { marks: 95 } }
);

// Update multiple records (set status Active for all CSE students)
db.students.updateMany(
  { department: "CSE" },
  { $set: { status: "Active" } }
);

// Increment value using $inc
db.students.updateOne(
  { rollno: 203 },
  { $inc: { marks: 5 } }
);

// 18. Delete Operations:
// Delete single document
db.students.deleteOne({ rollno: 213 });

// Delete multiple matching conditions
db.students.deleteMany({ marks: { $lt: 65 } });

// 19. Distinct Department values
db.students.distinct("department");

// 20. Aggregation Pipeline: Department-wise Average Marks & Total Count
db.students.aggregate([
  {
    $group: {
      _id: "$department",
      studentCount: { $sum: 1 },
      avgMarks: { $avg: "$marks" },
      maxMarks: { $max: "$marks" },
      minMarks: { $min: "$marks" }
    }
  },
  { $sort: { avgMarks: -1 } }
]);

// 21. Indexes
db.students.createIndex({ rollno: 1 }, { unique: true });
db.students.getIndexes();
