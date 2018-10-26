## Separation

!!! abstract "Step "
    1. Navigate to (root) > Global Resources > Separation Profiles
    2. Right click and select Add > Separation Profile...
    3. Name it something like ==Change in Value (Invoice Number)==

![](img/3-1/009)

!!! abstract "Step "
    1. Set the Provider property to ==Change in Value Separation==
    2. Set the Provider > Value Extractor > Type property to ==Reference==
    3. Set the Referenced Extractor property to the Data Extraction • Data Types > Training Materials > Invoice Number Data Type

![](img/3-1/020)

!!! abstract "Step "
    1. Click on the Testing tab
    2. Click the Separate Batch button

![](img/3-1/022)

!!! abstract "Step "
    1. In the batch viewer, find Page 38
    2. Right click and select Add Selection to New Folder

![](img/3-1/025)

## Classification

!!! abstract "Step "
    1. Navigate to (root) > Content Models
    2. Right click and select Add > Content Model...
    3. Name it something like ==Invoices==

![](img/3-2/002)

![](img/3-2/004)

!!! abstract "Step "
    1. Right click on the Invoices Content Model and select Create Data Model
    2. Right click on the Invoices Content Model and select Create Local Resources Folder

![](img/3-2/006)

![](img/3-2/007)

!!! abstract "Step "
    1. Right click on the Invoices Content Model and select Contents > Add Multiple Items...
    2. In the Contents • Add Multiple Items window, set the Item Type property to ==Document Type==
    3. Edit the Item Names property and type out the names of each vendor
        - Acme
        - Enid
        - Express
        - Spartan
        - Standard
    4. Click Execute to complete

![](img/3-2/008)

![](img/3-2/013)

![](img/3-2/015)

!!! abstract "Step "
    1. On the Invoices Content Model in the General section, set the Classification Method property to ==Lexical==
    2. Still in the General section, navigate to Classification Method > Text Feature Extractor > Type
    3. Set the Type property to ==Reference==
    4. Set the Referenced Extractor property to the Data Extraction > Downloads > Features > ==Words (Stemmed)== Data Type

![](img/3-2/017)

![](img/3-2/026)

!!! abstract "Step "
    1. Click on the Acme Document Type
    2. Set the Positive Extractor > Type property to ==Internal==
    3. Click to edit the pattern

![](img/3-2/028)

![](img/3-2/034)

!!! abstract "Step "
    1. In the batch viewer, make sure Folder (1) is selected
    2. In the Value Pattern editor, type
        ```
        acme international
        ```
    3. Click OK to close

![](img/3-2/036)

!!! abstract "Step "
    1. Repeat the previous two steps for each of the other four vendors, using the following patterns:
        - For Enid, use
            ```
            enid parts
            ```
        - For Express, use
            ```
            express manufacturing
            ```
        - For Spartan, use
            ```
            spartan manufacturing
            ```
        - For Standard, use
            ```
            standard products
            ```

![](img/3-2/38-42)

!!! abstract "Step "
    1. Navigate to the Invoices Content Model
    2. Click on the Classification Testing tab
    3. Click the Classify Batch button
    4. Click Execute

![](img/3-2/043)

![](img/3-2/044)

![](img/3-2/045)
