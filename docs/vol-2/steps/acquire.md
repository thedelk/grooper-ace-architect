## Importing

### Importing a pre-made batch

!!! abstract "Step "
    1. Right click on (root) and select Import > Compressed Archive
    2. Set the Import Path property to the Begin.zip file

![](img/1-1/002.png)

![](img/1-1/003.png)

![](img/1-1/005.png)

### Creating an empty test batch

!!! abstract "Step "
    1. Navigate to (root) > Batch Processing > Batches > Test
    2. Right click and select Add > Batch...
    3. Name it ==Invoices==

![](img/1-1/007.png)

![](img/1-1/009.png)

## Scanning

### Creating a Scanner Profile

!!! abstract "Step "
    1. Navigate to (root) > Global Resources > Scanner Profiles
    2. Right click and select Add > Scanner Profile...
    3. Name it ==Invoices Source Scan==

![](img/1-1/012.png)

![](img/1-1/014.png)

### Configuring the Scanner Profile

!!! abstract "Step "
    1. Set the Selected Device property to ==File System Import==
    2. Click to edit the Device Settings property
    3. Set the Import Source property to ==TestBatch==
    4. Set the Source Batch property to the Batches • Test > _Source > _Source batch

![](img/1-1/017.png)

![](img/1-1/022.png)

![](img/1-1/025.png)

### Testing the Scanner Profile

!!! abstract "Step "
    1. Navigate to (root) > Global Resources > Scanner Profiles
    2. Click the Scanner Profile dropdown and select the Invoices Source Scan profile
    3. Click the Batch dropdown and select the Invoices batch
    4. Click Scan

![](img/1-1/030.png)

![](img/1-1/032.png)

![](img/1-1/034.png)

![](img/1-1/035.png)