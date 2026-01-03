/* ============================================================
   BANKING PRACTICE DATABASE
   PRODUCTION-STYLE SCHEMA + SYNTHETIC DATA
   ============================================================ */


/* =========================
   TABLES
   ========================= */

CREATE TABLE Branches (
    BranchID INT IDENTITY PRIMARY KEY,
    BranchCode VARCHAR(10) UNIQUE,
    BranchName VARCHAR(100),
    City VARCHAR(50),
    State VARCHAR(50),
    CreatedDate DATE DEFAULT GETDATE()
);

CREATE TABLE Customers (
    CustomerID INT IDENTITY PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DOB DATE,
    Email VARCHAR(100),
    Phone VARCHAR(20),
    CreatedDate DATE,
    Status VARCHAR(20)
);

CREATE TABLE Accounts (
    AccountID INT IDENTITY PRIMARY KEY,
    AccountNumber VARCHAR(20) UNIQUE,
    AccountType VARCHAR(30),
    BranchID INT,
    CurrentBalance DECIMAL(18,2),
    OpenDate DATE,
    Status VARCHAR(20),
    CONSTRAINT FK_Accounts_Branch FOREIGN KEY (BranchID) REFERENCES Branches(BranchID)
);

CREATE TABLE AccountOwnerships (
    OwnershipID INT IDENTITY PRIMARY KEY,
    AccountID INT,
    CustomerID INT,
    OwnershipType VARCHAR(20),
    CONSTRAINT FK_Own_Acc FOREIGN KEY (AccountID) REFERENCES Accounts(AccountID),
    CONSTRAINT FK_Own_Cust FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

CREATE TABLE Transactions (
    TransactionID BIGINT IDENTITY PRIMARY KEY,
    AccountID INT,
    TransactionDate DATETIME,
    TransactionType VARCHAR(30),
    Amount DECIMAL(18,2),
    BalanceAfter DECIMAL(18,2),
    Description VARCHAR(200),
    CONSTRAINT FK_Tx_Acc FOREIGN KEY (AccountID) REFERENCES Accounts(AccountID)
);

CREATE TABLE Transfers (
    TransferID BIGINT IDENTITY PRIMARY KEY,
    FromAccountID INT,
    ToAccountID INT,
    Amount DECIMAL(18,2),
    TransferDate DATETIME,
    CONSTRAINT FK_Tr_From FOREIGN KEY (FromAccountID) REFERENCES Accounts(AccountID),
    CONSTRAINT FK_Tr_To FOREIGN KEY (ToAccountID) REFERENCES Accounts(AccountID)
);

CREATE TABLE Loans (
    LoanID INT IDENTITY PRIMARY KEY,
    CustomerID INT,
    LoanType VARCHAR(50),
    Principal DECIMAL(18,2),
    InterestRate DECIMAL(5,2),
    StartDate DATE,
    EndDate DATE,
    Status VARCHAR(20),
    CONSTRAINT FK_Loan_Cust FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

CREATE TABLE LoanPayments (
    PaymentID BIGINT IDENTITY PRIMARY KEY,
    LoanID INT,
    DueDate DATE,
    PaymentDate DATE,
    Amount DECIMAL(18,2),
    CONSTRAINT FK_LP_Loan FOREIGN KEY (LoanID) REFERENCES Loans(LoanID)
);

