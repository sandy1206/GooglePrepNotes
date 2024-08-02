# 📊 Database Management Systems (DBMS) Curriculum

Welcome to the DBMS section! This README provides a comprehensive curriculum for preparing for DBMS interviews, covering essential concepts, types of databases, and important features.

## 🌐 Useful Links

| Category        | Title                            | Description                                  | Link                                               |
|-----------------|----------------------------------|----------------------------------------------|---------------------------------------------------|
| **Books**       | "Database System Concepts"        | Comprehensive textbook on DBMS concepts      | [Buy Now](https://example.com/database-system-concepts) |
| **Books**       | "Designing Data-Intensive Applications" | Best practices for building scalable data systems | [Buy Now](https://example.com/data-intensive-applications) |
| **Courses**     | Database Fundamentals Course      | Introductory course on DBMS                  | [Enroll](https://example.com/database-fundamentals-course) |
| **Courses**     | Advanced Database Systems Course  | Advanced course covering complex DBMS topics | [Enroll](https://example.com/advanced-database-systems) |
| **Tools**       | MySQL Workbench                    | Visual tool for database design and management | [Download](https://example.com/mysql-workbench)   |
| **Tools**       | pgAdmin                           | PostgreSQL database management tool          | [Download](https://example.com/pgadmin)           |

## 📚 Table of Contents

### DBMS Basics
- [ ] [Introduction to DBMS](./DBMS/Basics/Introduction.md)
- [ ] [Database Models](./DBMS/Basics/Database_Models.md)
  - [ ] [Relational Model](./DBMS/Basics/Relational_Model.md)
  - [ ] [NoSQL Models](./DBMS/Basics/NoSQL_Models.md)
    - [ ] [Document Model](./DBMS/Basics/Document_Model.md)
    - [ ] [Key-Value Model](./DBMS/Basics/Key_Value_Model.md)
    - [ ] [Column-Family Model](./DBMS/Basics/Column_Family_Model.md)
    - [ ] [Graph Model](./DBMS/Basics/Graph_Model.md)
- [ ] [DBMS Architecture](./DBMS/Basics/Architecture.md)
  - [ ] [Three-Tier Architecture](./DBMS/Basics/Three_Tier_Architecture.md)
  - [ ] [Client-Server Architecture](./DBMS/Basics/Client_Server_Architecture.md)
- [ ] [Database Languages](./DBMS/Basics/Database_Languages.md)
  - [ ] [SQL](./DBMS/Basics/SQL.md)
  - [ ] [PL/SQL](./DBMS/Basics/PL_SQL.md)
  - [ ] [T-SQL](./DBMS/Basics/T_SQL.md)

### Database Design
- [ ] [Normalization](./DBMS/Design/Normalization.md)
  - [ ] [1NF (First Normal Form)](./DBMS/Design/1NF.md)
  - [ ] [2NF (Second Normal Form)](./DBMS/Design/2NF.md)
  - [ ] [3NF (Third Normal Form)](./DBMS/Design/3NF.md)
  - [ ] [BCNF (Boyce-Codd Normal Form)](./DBMS/Design/BCNF.md)
  - [ ] [4NF (Fourth Normal Form)](./DBMS/Design/4NF.md)
  - [ ] [5NF (Fifth Normal Form)](./DBMS/Design/5NF.md)
- [ ] [Denormalization](./DBMS/Design/Denormalization.md)
- [ ] [Entity-Relationship (ER) Modeling](./DBMS/Design/ER_Modeling.md)
  - [ ] [ER Diagrams](./DBMS/Design/ER_Diagrams.md)
  - [ ] [Entities and Relationships](./DBMS/Design/Entities_Relationships.md)
  - [ ] [Cardinality and Participation](./DBMS/Design/Cardinality_Participation.md)

### Transactions and Concurrency Control
- [ ] [ACID Properties](./DBMS/Transactions/ACID_Properties.md)
  - [ ] [Atomicity](./DBMS/Transactions/Atomicity.md)
  - [ ] [Consistency](./DBMS/Transactions/Consistency.md)
  - [ ] [Isolation](./DBMS/Transactions/Isolation.md)
  - [ ] [Durability](./DBMS/Transactions/Durability.md)
- [ ] [Transaction Management](./DBMS/Transactions/Transaction_Management.md)
  - [ ] [Commit and Rollback](./DBMS/Transactions/Commit_Rollback.md)
  - [ ] [Concurrency Control Mechanisms](./DBMS/Transactions/Concurrency_Control.md)
    - [ ] [Locks](./DBMS/Transactions/Locks.md)
    - [ ] [Deadlock Handling](./DBMS/Transactions/Deadlock_Handling.md)
    - [ ] [Optimistic and Pessimistic Concurrency Control](./DBMS/Transactions/Optimistic_Pessimistic.md)
    - [ ] [Isolation Levels](./DBMS/Transactions/Isolation_Levels.md)

### Query Optimization
- [ ] [Query Execution Plans](./DBMS/Optimization/Execution_Plans.md)
- [ ] [Indexes](./DBMS/Optimization/Indexes.md)
  - [ ] [B-Tree Indexes](./DBMS/Optimization/B_Tree_Indexes.md)
  - [ ] [Hash Indexes](./DBMS/Optimization/Hash_Indexes.md)
  - [ ] [Bitmap Indexes](./DBMS/Optimization/Bitmap_Indexes.md)
- [ ] [Query Performance Tuning](./DBMS/Optimization/Performance_Tuning.md)
  - [ ] [Query Rewrite](./DBMS/Optimization/Query_Rewrite.md)
  - [ ] [Database Statistics](./DBMS/Optimization/Database_Statistics.md)
  - [ ] [Execution Plan Analysis](./DBMS/Optimization/Execution_Plan_Analysis.md)

### Backup and Recovery
- [ ] [Backup Strategies](./DBMS/Backup_Recovery/Backup_Strategies.md)
  - [ ] [Full Backup](./DBMS/Backup_Recovery/Full_Backup.md)
  - [ ] [Incremental Backup](./DBMS/Backup_Recovery/Incremental_Backup.md)
  - [ ] [Differential Backup](./DBMS/Backup_Recovery/Differential_Backup.md)
- [ ] [Recovery Methods](./DBMS/Backup_Recovery/Recovery_Methods.md)
  - [ ] [Point-in-Time Recovery](./DBMS/Backup_Recovery/Point_in_Time_Recovery.md)
  - [ ] [Disaster Recovery Planning](./DBMS/Backup_Recovery/Disaster_Recovery_Planning.md)
  - [ ] [Transaction Log Management](./DBMS/Backup_Recovery/Transaction_Log_Management.md)

### Distributed Databases
- [ ] [Sharding](./DBMS/Distributed/Sharding.md)
- [ ] [Replication](./DBMS/Distributed/Replication.md)
  - [ ] [Master-Slave Replication](./DBMS/Distributed/Master_Slave_Replication.md)
  - [ ] [Master-Master Replication](./DBMS/Distributed/Master_Master_Replication.md)
- [ ] [Distributed Transactions](./DBMS/Distributed/Distributed_Transactions.md)
  - [ ] [Two-Phase Commit](./DBMS/Distributed/Two_Phase_Commit.md)
  - [ ] [Three-Phase Commit](./DBMS/Distributed/Three_Phase_Commit.md)

### Advanced Topics
- [ ] [Data Warehousing](./DBMS/Advanced/Data_Warehousing.md)
  - [ ] [Star Schema](./DBMS/Advanced/Star_Schema.md)
  - [ ] [Snowflake Schema](./DBMS/Advanced/Snowflake_Schema.md)
- [ ] [Data Mining](./DBMS/Advanced/Data_Mining.md)
  - [ ] [Classification](./DBMS/Advanced/Classification.md)
  - [ ] [Clustering](./DBMS/Advanced/Clustering.md)
- [ ] [NoSQL Databases](./DBMS/Advanced/NoSQL_Databases.md)
  - [ ] [Document Stores](./DBMS/Advanced/Document_Stores.md)
  - [ ] [Column Stores](./DBMS/Advanced/Column_Stores.md)
  - [ ] [Graph Databases](./DBMS/Advanced/Graph_Databases.md)
  - [ ] [Key-Value Stores](./DBMS/Advanced/Key_Value_Stores.md)

### Database-Specific Topics
- [ ] [PostgreSQL](./DBMS/Database_Specific/PostgreSQL.md)
  - [ ] [Features and Capabilities](./DBMS/Database_Specific/PostgreSQL_Features.md)
  - [ ] [Advanced Indexing](./DBMS/Database_Specific/PostgreSQL_Advanced_Indexing.md)
  - [ ] [Full-Text Search](./DBMS/Database_Specific/PostgreSQL_Full_Text_Search.md)
  - [ ] [Replication and High Availability](./DBMS/Database_Specific/PostgreSQL_Replication.md)
- [ ] [MySQL](./DBMS/Database_Specific/MySQL.md)
  - [ ] [Features and Capabilities](./DBMS/Database_Specific/MySQL_Features.md)
  - [ ] [InnoDB Storage Engine](./DBMS/Database_Specific/MySQL_InnoDB.md)
  - [ ] [Replication and Clustering](./DBMS/Database_Specific/MySQL_Replication.md)
- [ ] [MongoDB](./DBMS/Database_Specific/MongoDB.md)
  - [ ] [Features and Capabilities](./DBMS/Database_Specific/MongoDB_Features.md)
  - [ ] [Document Model](./DBMS/Database_Specific/MongoDB_Document_Model.md)
  - [ ] [Aggregation Framework](./DBMS/Database_Specific/MongoDB_Aggregation.md)
  - [ ] [Sharding](./DBMS/Database_Specific/MongoDB_Sharding.md)
- [ ] [Cassandra](./DBMS/Database_Specific/Cassandra.md)
  - [ ] [Features and Capabilities](./DBMS/Database_Specific/Cassandra_Features.md)
  - [ ] [Data Model](./DBMS/Database_Specific/Cassandra_Data_Model.md)
  - [ ] [Replication and Consistency](./DBMS/Database_Specific/Cassandra_Replication.md)
- [ ] [Amazon S3](./DBMS/Database_Specific/Amazon_S3.md)
  - [ ] [Features and Capabilities](./DBMS/Database_Specific/Amazon_S3_Features.md)
  - [ ] [Data Storage and Retrieval](./DBMS/Database_Specific/Amazon_S3_Data_Storage.md)
  - [ ] [Security and Access Control](./DBMS/Database_Specific/Amazon_S3_Security.md)

---

Feel free to adjust the links and sections based on your specific needs and focus areas. This structure provides a thorough and organized overview of DBMS concepts and database-specific topics essential for interview preparation.
