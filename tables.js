//MySQL Table Schemas for Technician Application

// CREATE TABLE IF NOT EXISTS technicians (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   name VARCHAR(255) NOT NULL,
//   email VARCHAR(255) NOT NULL UNIQUE,
//   password VARCHAR(255) NOT NULL
// );


// CREATE TABLE IF NOT EXISTS apartments (
// id INT AUTO_INCREMENT PRIMARY KEY,
// apartmentName VARCHAR(255) NOT NULL,
// location VARCHAR(255) NOT NULL
// );


// CREATE TABLE IF NOT EXISTS admin (
// id INT AUTO_INCREMENT PRIMARY KEY,
// email VARCHAR(255) NOT NULL UNIQUE,
// password VARCHAR(255) NOT NULL
// );

// CREATE TABLE IF NOT EXISTS jobs (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   title VARCHAR(255) NOT NULL,
//   description TEXT,
//   technician INT NOT NULL,
//   apartment INT NOT NULL,
//   note TEXT,
//   imageUrls LONGTEXT,
//   status ENUM('Rescheduled', 'Assigned', 'Inprogress', 'Unscheduled', 'Completed', 'Cancelled'),
//   timeline VARCHAR(255),
//   duetime VARCHAR(255),
//   responsibilities LONGTEXT,
//   createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//   updatedAt TIMESTAMP,
//   FOREIGN KEY (technician) REFERENCES technicians(id),
//   FOREIGN KEY (apartment) REFERENCES apartments(id)
// );


//update jobs to add priority
//ALTER TABLE jobs ADD COLUMN priority INT NOT NULL DEFAULT 0;