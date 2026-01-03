

INSERT INTO Branches (BranchCode, BranchName, City, State)
SELECT 
    'BR' + RIGHT('00' + CAST(n AS VARCHAR),2),
    'Branch ' + CAST(n AS VARCHAR),
    CHOOSE(n % 5 + 1,'New York','Chicago','Dallas','San Jose','Atlanta'),
    'USA'
FROM (SELECT TOP 10 ROW_NUMBER() OVER (ORDER BY (SELECT NULL)) n FROM sys.objects) t;


INSERT INTO Customers
SELECT
    'First' + CAST(n AS VARCHAR),
    'Last' + CAST(n AS VARCHAR),
    DATEADD(YEAR, -(20 + n % 40), GETDATE()),
    'customer' + CAST(n AS VARCHAR) + '@bank.com',
    '555-01' + RIGHT('000' + CAST(n AS VARCHAR),3),
    DATEADD(DAY, -n, GETDATE()),
    'ACTIVE'
FROM (SELECT TOP 200 ROW_NUMBER() OVER (ORDER BY (SELECT NULL)) n FROM sys.objects) t;

-- Accounts (1–3 per customer)
INSERT INTO Accounts
SELECT
    'AC' + CAST(100000 + ROW_NUMBER() OVER (ORDER BY c.CustomerID) AS VARCHAR),
    CHOOSE(ABS(CHECKSUM(NEWID())) % 3 + 1,'CHECKING','SAVINGS','CREDIT'),
    ABS(CHECKSUM(NEWID())) % 10 + 1,
    ABS(CHECKSUM(NEWID())) % 50000 + 500,
    DATEADD(YEAR, -ABS(CHECKSUM(NEWID())) % 5, GETDATE()),
    'ACTIVE'
FROM Customers c
CROSS APPLY (SELECT TOP (ABS(CHECKSUM(NEWID())) % 3 + 1) 1 x FROM sys.objects) a;

-- Account Ownerships
INSERT INTO AccountOwnerships
SELECT
    a.AccountID,
    c.CustomerID,
    'PRIMARY'
FROM Accounts a
JOIN Customers c ON a.AccountID % 200 + 1 = c.CustomerID;

-- Transactions (~25,000)
DECLARE @i INT = 0;
WHILE @i < 25000
BEGIN
    INSERT INTO Transactions
    SELECT TOP 1
        AccountID,
        DATEADD(DAY, -ABS(CHECKSUM(NEWID())) % 1825, GETDATE()),
        CHOOSE(ABS(CHECKSUM(NEWID())) % 3 + 1,'DEBIT','CREDIT','FEE'),
        ABS(CHECKSUM(NEWID())) % 500 + 1,
        CurrentBalance + ABS(CHECKSUM(NEWID())) % 1000,
        'Synthetic banking transaction'
    FROM Accounts
    ORDER BY NEWID();

    SET @i += 1;
END;

-- Transfers (~2,000)
INSERT INTO Transfers
SELECT TOP 2000
    a1.AccountID,
    a2.AccountID,
    ABS(CHECKSUM(NEWID())) % 1000 + 50,
    DATEADD(DAY, -ABS(CHECKSUM(NEWID())) % 1825, GETDATE())
FROM Accounts a1
JOIN Accounts a2 ON a1.AccountID <> a2.AccountID
ORDER BY NEWID();

-- Loans (~80)
INSERT INTO Loans
SELECT TOP 80
    CustomerID,
    CHOOSE(ABS(CHECKSUM(NEWID())) % 3 + 1,'HOME','AUTO','PERSONAL'),
    ABS(CHECKSUM(NEWID())) % 300000 + 10000,
    ABS(CHECKSUM(NEWID())) % 5 + 3,
    DATEADD(YEAR, -3, GETDATE()),
    DATEADD(YEAR, 20, GETDATE()),
    'ACTIVE'
FROM Customers
ORDER BY NEWID();

-- Loan Payments (12 payments per loan)
INSERT INTO LoanPayments (LoanID, DueDate, PaymentDate, Amount)
SELECT
    l.LoanID,
    DATEADD(MONTH, x.n, l.StartDate),
    DATEADD(MONTH, x.n, l.StartDate),
    l.Principal / 120
FROM Loans l
CROSS APPLY (
    SELECT TOP (12)
        ROW_NUMBER() OVER (ORDER BY (SELECT NULL)) AS n
    FROM sys.objects
) x;
/* =========================
   DONE
   ========================= */
