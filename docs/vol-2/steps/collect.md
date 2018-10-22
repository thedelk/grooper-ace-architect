## Invoice Date
---
1. Navigate to the Invoices Content Model
2. Right click on its Data Model and select Contents > Add Multiple Items...
3. In the Contents • Add Multiple Items window, make sure Item Type is set to ==Data Field==
4. Edit the Item Names property and type out the names of the following fields
    - Invoice Number
    - PO Number
    - Invoice Date
    - Freight
    - Sales Tax
    - Discount
    - Invoice Amount
    - Payment Terms
    - Ship To
    - Remit To
5. Click Execute to complete

    img/4-1/005

    img/4-1/008

    img/4-1/010
---
1. Right click on the (local resources) folder and select Add > Folder...
2. Give it a name, like ==Extractors==

    img/4-1/016

    img/4-1/018
---
1. Right click on the Extractors folder and select Add > Field Class...
2. Name it ==Invoice Date==

    img/4-1/019

    img/4-1/021
---
1. In the General section, set the Value Extractor > Type property to Reference
2. Set the Referenced Extractor property to the Data Extraction • Data Types > Downloads > Base Types > Date Data Type

    img/4-1/029
---
1. In the General section, set the Feature Extractor > Type property to Reference
2. Set the Referenced Extractor property to the Data Extraction • Data Types > Training Materials > Features > Phrases Data Type

    img/4-1/031
---
1. Select Acme (1`)
2. Click the Run Extraction button
3. In the candidate list, right click on the ==11/14/2008== value and select Train As Positive

    img/4-1/034
---
1. Select Standard (2)
2. Select both of the ==11/11/2008== candidates that have correct features
3. Right click on either of them and select Train As Positive

    img/4-1/039
---
1. Select Express (3)
2. Right click on the ==12/2/2008== candidate with 58.1689% confidence and select Train As Positive

    img/4-1/043
---
1. Select Spartan (4)
2. Click to edit the Context Zones property

    img/4-1/048
---
1. In the Context Zones window, edit the dimensions as follows:
    1. Zone 1:
        1. Left: `-3.278`
        2. Top: `-0.054`
        3. Right: `0.312`
        4. Bottom: `0.054`
    2. Zone 2:
        1. Left: `-0.67`
        2. Top: `-0.37`
        3. Right: `0.5`
        4. Bottom: `0.04`
2. Click OK

    img/4-1/050

    img/4-1/052
---
1. Select Enid (5)
2. In the Output section, set the Minimum Confidence property to ==70%==

    img/4-1/060

    img/4-1/062
---
1. In the Data Model, select the Invoice Date Data Field
2. In the General section, set the Value Extractor > Type property to Reference
3. Set the Referenced Extractor property to the Invoices • (local resources) > Extractors > Invoice Date Field Class.
4. In the Behavior section, set the Required property to ==True==

    img/4-1/063

    img/4-1/065

    img/4-1/068

## Ship To
---
1. Right click on the Extractors folder and select Add > Field Class...
2. Name it ==Ship To==

    img/4-2/002

    img/4-2/004
---
1. Right click on the Ship To Field Class and select Add > Data Type...
2. Name it ==[Features] Ship To==
3. In the Data Extraction section, click to edit the Pattern

    img/4-2/005

    img/4-2/006

    img/4-2/007
---
1. In the Value Pattern editor, type:
    ```
    ship to|shipped to|ship
    ```
2. In the Output Format editor, type:
    ```
    ship to
    ```
3. Click OK

    img/4-2/009
---
1. Click on the Ship To Field Class
2. In the General section, set the Value Extractor > Type property to Reference
3. Set the Referenced Extractor property to the Data Extraction • Data Types > Training Materials > Base Types > Address Data Type

    img/4-2/012

    img/4-2/013
---
1. In the General section, set the Value Extractor > Type property to Reference
2. Set the Referenced Extractor property to the Extractors • Ship To > [Features] Ship To Data Type

    img/4-2/014
---
1. In the Context Scope Options section, click to edit the Context Zones
2. In the Context Zones window, delete one of the zones
3. Edit the dimensions of the remaining zone:
    1. Left: `-1.25`
    2. Top: `-0.54`
    3. Right: `0.73`
    4. Bottom: `0.13`
4. Click OK
5. Click Run Extraction

    img/4-2/015

    img/4-2/018
---
1. In the candidate list, find the value that has features that can be trained
2. Right click on that value and select Train As Positive
3. Set the Minimum Confidence property to ==70%==

    img/4-2/023

    img/4-2/030
---
1. In the Data Model, select the Ship To Data Field
2. In the General section, set the Value Extractor > Type property to Reference
3. Set the Referenced Extractor property to the Invoices • (local resources) > Extractors > Ship To Field Class.
4. In the Behavior section, set the Required property to ==True==

    img/4-2/031

    img/4-2/032

    img/4-2/033

## Remit To
---






























    img/4-2/0