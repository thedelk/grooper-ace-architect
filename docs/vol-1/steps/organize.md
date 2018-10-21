## Section 3-1
---
1. Navigate to (root) > Global Resources > Separation Profiles 
2. Create a new separation profile
3. Give it a name, like Invoices Separation

    img/3-1/006
---
Change the following properties:
1. Set Provider to Control Sheet Separation
2. Set Delete All Separators to True

    img/3-1/013
---
1. Navigate to (root) > Batch Processing > Processes > Working > Invoices Process
2. Add a new step
3. Set the Activity Type of the step to Separate
4. Set the Separation Profile to the new Invoices Separation profile we created

    img/3-1/016
---
1. Navigate to (root) > Batch Processing > Batches > Production > Invoices Process.
2. Right click on the Invoices Batch and select Update Process….
3. Set Target Step to Separate.
4. Click Execute.

    img/3-1/018
    
    img/3-1/021
---
1. Resume the batch
2. Click Process

    img/3-1/027
    
    img/3-1/029
---
## Section 3-2
---
1. Navigate to (root) > Content Models.
2. Right click on Content Models and select Add > Content Model….
3. Name it ==Invoices==.

    img/3-2/002
---
1. Right click on the new Invoices Content Model and select Contents > Add Multiple Items….
    
    img/3-2/005
    
2. In the Contents • Add Multiple Items window, set Item Type to Document Type
3. Edit the Item Names property and type out the names of each vendor
    - Acme
    - Enid
    - Express
    - Spartan
    - Standard
4. Click Execute to complete

    img/3-2/009
---
1. Navigate to (root) > Batch Processing > Batches > Test > Production Clones > Invoices Process > Invoices Batch
2. Right click on Invoices Batch and select Delete

    img/3-2/015
---
1. Navigate to (root) > Batch Processing > Batches > Production > Invoices Process > Invoices Batch
2. Click Clone To Test

    img/3-2/016
---
1. Navigate to (root) > Content Models > Invoices
2. Right click on Invoices and select Create Data Model
3. Right click on Invoices and select Create Local Resources Folder

    img/3-2/019
---
1. On the Invoices Content Model in the General section, set the Classification Method property to Lexical
2. Still in the General section, navigate to Classification Method > Text Feature Extractor > Type
3. Set the Type property to Reference
4. Set the Referenced Extractor property to the Data Extraction > Downloads > Features > Words (Stemmed) Data Type

    img/3-2/021

    img/3-2/026
---
1. Click on the Classification Testing tab
2. Select Folder (1)
3. In the toolbar, click on the Train Document button
4. Select the Acme Document Type from the list
5. In the toolbar, click on the Classify Batch button

    img/3-2/027

    img/3-2/028

    img/3-2/031

    img/3-2/035
---
1. Train the other four vendors:
    - Folder (2) -> Standard (2)
    - Folder (3) -> Express (3)
    - Folder (4) -> Spartan (4)
    - Folder (5) -> Enid (5)
2. In the toolbar, click on the Classify Batch button

    img/3-2/035

    img/3-2/038
---
