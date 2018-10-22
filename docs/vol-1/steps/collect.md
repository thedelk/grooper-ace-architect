## Section 4-1

!!! abstract "Step "
    1. Navigate to (root) > Content Models > Invoices > (data model)
    2. Right click on the Data Model and select Add > Data Field...
    3. Name it ==Invoice Number==

![](img/4-1/001.png)

![](img/4-1/003.png)

!!! abstract "Step "
    1. Right click on the (local resources) folder and select Add > Data Type...
    2. Name it ==Invoice Number==

![](img/4-1/004.png)

![](img/4-1/006.png)

!!! abstract "Step "
    1. Right click on the Invoices Data Type and select Add > Data Format...
    2. Name it ==Acme/Standard/Express==

![](img/4-1/007.png)

![](img/4-1/009.png)

!!! abstract "Step "
    1. Select Acme (1) from the batch viewer
    2. In the Value Pattern editor, type:

        `invoice\snumber\s?:?\s(\d{8,10})`

    3. In the Output Format editor, type:

        `{1}`

![](img/4-1/012.png)

!!! abstract "Step "
    1. Right click on the Invoice Number Data Type and select Contents > Add Multiple Items...
    2. In the Contents • Add Multiple Items window, set Item Type to Data Format
    3. Edit the Item Names property and type out the names of the other formats:
        - Spartan
        - Enid
    4. Click Execute to complete

![](img/4-1/013.png)

![](img/4-1/014.png)

!!! abstract "Step "
    1. Select the Invoice Number > Spartan Data Format
    2. Select Spartan (4) in the batch viewer
    3. In the Value Pattern editor, type:

        `\w{2}\d{2}-\d{6}`

    4. In the Look Behind editor, type:

        `\r\n`

![](img/4-1/020.png)

!!! abstract "Step "
    1. Select the Invoice Number > Enid Data Format
    2. Select Enid (5) in the batch viewer
    3. In the Value Pattern editor, type:

        `(\w{3})(\d{8})`

    4. In the Output Format editor, type:

        `{1} {2}`

![](img/4-1/022.png)-2

!!! abstract "Step "
    1. In the Invoices Content Model, navigate to (data model) > Invoice Number
    2. In the General section, expand the Value Extractor property
    3. Set the Value Extractor > Type property to Reference
    4. Set the Value Extractor > Referenced Extractor property to the Invoices > Invoice Number Data Type
    5. In the Behavior section, set the Required property to ==True==

![](img/4-1/030.png)

![](img/4-1/033.png)

![](img/4-1/042.png)
---
## Section 4-2

!!! abstract "Step "
    1. Navigate to (root) > Batch Processing > Processes > Working > Invoices Process
    2. Add a new step
    3. Set the Activity Type property of the new step to ==Extract==

![](img/4-2/001.png)

![](img/4-2/002.png)

!!! abstract "Step "
    1. Add a new step
    2. Set the Activity Type property of the new step to ==Data Review==
    3. Save and Publish

![](img/4-2/003.png)

!!! abstract "Step "
    1. Navigate to (root) > Batch Processing > Batches > Production > Invoices Process
    2. Make sure the batch is paused
    3. Right click on the Invoices Batch and select Update Process...
    4. Set Target Step to ==Extract==
    5. Click Execute

![](img/4-2/005.png)

![](img/4-2/006.png)

!!! abstract "Step "
    1. Resume the batch
    2. Click Process

![](img/4-2/008.png)

![](img/4-2/010.png)

!!! abstract "Step "
    1. After the Extract step has completed, click Process to start the Data Review step
    2. In Grooper Data Review, press Ctrl + I on your keyboard

![](img/4-2/011.png)

!!! abstract "Step "
    1. Fix the issue with the field
    2. Use Ctrl + I to jump to the next document with an issue
    3. Repeat until all documents are valid
    4. In the toolbar, click the Complete Task button

![](img/4-2/018.png)

![](img/4-2/020.png)

![](img/4-2/024.png)

![](img/4-2/027.png)