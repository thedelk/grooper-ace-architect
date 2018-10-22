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
1. Right click on the Extractors folder and select Add > Field Class...
2. Name it Remit To
3. In the General section, set the Value Extractor > Type property to Reference
4. Set the Referenced Extractor property to the Data Extraction • Data Types > Training Materials > Base Types > Address Data Type

    img/4-3/001

    img/4-3/003

    img/4-3/0004
---
1. In the General section, set the Feature Extractor > Type property to Internal
2. Click to edit the Pattern

    img/4-3/006
---
1. In the Value Pattern editor, type:
    ```
    remit to|mail payment to|checks to
    ```
2. In the Output Format editor, type:
    ```
    remit to
    ```
3. Select Standard (2)
4. Click on the Properties tab
5. Change the Mode property to FuzzyRegEx
6. In the Fuzzy Matching Options section, expand Fuzzy Match Weightings
7. Click to edit Local Entries
8. In the List Editor window, type:
    ```
    li=0.25
    ```
9. Click OK to close the List Editor
10. Click OK to close the Pattern Editor

    img/4-3/023-1

    img/4-3/014

    img/4-3/019

    img/4-3/021
---
1. Click to edit the Context Zones property
2. In the Context Zones window, delete one of the zones
3. Edit the dimensions of the remaining zone:
    1. Left: `-2.55`
    2. Top: `-0.55`
    3. Right: `1`
    4. Bottom: `0.15`
4. Click OK

    img/4-3/027

    img/4-3/028
---
1. Select Acme (1)
2. In the candidate list, find the value that has features that can be trained
3. Right click on that value and select Train As Positive
4. Set the Minimum Confidence property to ==70%==

    img/4-3/033

    img/4-3/034
---
1. In the Remit To Data Field, set the Value Extractor > Type property to Reference
2. Set the Referenced Extractor property to the Invoices • (local resources) > Extractors > Remit To Field Class.
3. In the Behavior section, set the Required property to ==True==

    img/4-3/040

    img/4-3/041

## Feature List
---
1. Navigate to (root) > Batch Processing > Batches > Test > Invoices
2. Click on the Batch Viewer tab
3. Collapse the Node Tree using the button in the toolbar
4. Open Notepad.exe alongside Grooper Design Studio

    img/4-4/001

    img/4-4/002

    img/4-4/003
---
1. Select Acme (1)
2. In Notepad, begin typing a list of all words and phrases used to identify invoice items
3. Do this for the remaining four vendors
4. When complete, copy everything in Notepad to your clipboard

    img/4-4/004

    img/4-4/005

    img/4-4/007
---
1. Restore the default Grooper Design Studio view
2. Navigate to Content Models > Invoices > (local resources)
3. Right click and select Add > Folder...
4. Name it ==Lexicons==
5. Right click on the Lexicons folder and select Add > Lexicon...
6. Name it ==Invoice Field Labels==

    img/4-4/009

    img/4-4/011

    img/4-4/014
---
1. Paste your list of field labels in the Edit Entries editor
2. Right click in the Edit Entries editor and select Sort
3. Right click in the Edit Entries editor and select Deduplicate
4. Normalize synonymous phrases by setting an `=` sign between the original phrase and the desired transformed phrase

    img/4-4/015

    img/4-4/016

    img/4-4/018
---
1. Delete this Lexicon
2. Navigate to (root) > Global Resources > Lexicons > Training Materials > Invoice Field Labels
3. Right click and select Copy
4. Right click on the Invoices > (local resources) > Lexicons folder and select Paste

    img/4-4/019

    img/4-4/021

    img/4-4/022

    img/4-4/023
---
1. Right click on the (local resources) folder and select Add > Folder...
2. Name it ==_Global==
3. Right click on the _Global folder and select Add > Data Type...
4. Name it ==Invoice Field Labels==
5. Click to edit the Pattern

    img/4-4/024

    img/4-4/026

    img/4-4/027

    img/4-4/028
---
1. In the Value Pattern editor, type:
    ```
    [^\r\n\t\f:]+
    ```
2. Click on the Properties tab
3. Expand Preprocessing Options and set the Tab Marking property to Enabled

    img/4-4/029

    img/4-4/030

    img/4-4/031
---
1. In the Lookup and Translation section, click to edit the Lookup Options
2. In the Lookup Options window, expand Vocabulary
3. Select the Vocabulary > Included Lexicons property dropdown and check the box next to the Invoices • (local resources) > Lexicons > Invoice Field Labels Lexicon
4. Set the Enable Translation property to ==True==
5. Set the Fuzzy Match Similarity property to ==90%==
6. Click OK

    img/4-4/032

    img/4-4/036

    img/4-4/038

    img/4-4/044
---
1. In the Output Options section, click to edit Result Filter
2. In the Result Filter window, set the Output Case property to ==Lower==
3. Click OK to close the Result Filter window
4. Click OK to close the pattern editor window

    img/4-4/047

    img/4-4/049
---
1. Right click on the (local resources) > _Global folder and select Add > Data Type...
2. Name it ==[Array] PO Number==
3. Add two child Data Formats to the [Array] PO Number Data Type:
    1. Purchase
    2. Order Number

    img/4-4/056

    img/4-4/060
---
1. Select the [Array] PO Number > Purchase Data Format
2. Select Enid (5)
3. In the Value Pattern editor, type:
    ```
    purchase
    ```
4. In the Output Format editor, type:
    ```
    po
    ```

    img/4-4/061

    img/4-4/062
---
1. Select the [Array] PO Number > Order Number Data Format
2. Select Enid (5)
3. In the Value Pattern editor, type:
    ```
    order number
    ```
4. In the Output Format editor, type:
    ```
    number
    ```

    img/4-4/063
---
1. Select the [Array] PO Number Data Type
2. Set the Collation Method property to ==Ordered Array==
3. Expand Collation and set the Vertical Layout property to ==Enabled==
4. Expand the Vertical Layout property
5. Set the Maximum Distance property to ==0.25==
6. Set the Alignment property to ==Center==
7. Set the Alignment Tolerance property to ==0.1==
8. Set the Result Separator property to ==`␣`== (a single space)

    img/4-4/064

    img/4-4/073
---
1. Drag the [Array] PO Number Data Type on top of the Invoice Field Labels Data Type
2. Select the Invoice Field Labels Data Type to ensure the array is now being included in the results

    img/4-4/075

    img/4-4/076

    img/4-4/077

    img/4-4/078

## Invoice Number
---
1. Right click on the Extractors folder and select Add > Field Class...
2. Name it ==Invoice Number==

    img/4-5/002

    img/4-5/004
---
1. Create a child Data Type under the Invoice Number Field Class
2. Name it ==[Values] Invoice Number==
3. Create three child Data Formats under the [Values] Invoice Number Data Type and name them:
    1. ==Acme/Standard/Express==
    2. ==Enid==
    3. ==Spartan==

    img/4-5/005
---
Edit the patterns for each of the Data Formats:
- Acme/Standard/Express

    ```tab="Value Pattern"
    [0-9]{6,16}
    ```

- Enid

    ```tab="Value Pattern"
    ([A-Z]{3})/([@Number]{8})
    ```

    ```tab="Output Format"
    {1}{2:Number}
    ```

- Spartan

    ```tab="Value Pattern"
    ([A-Z]{2})([@Number]{2})-([@Number]{6})
    ```

    ```tab="Output Format"
    {1}{2:Number}-{3}
    ```

    img/4-5/007

    img/4-5/009

    img/4-5/011
---
1. Select the Invoice Number Field Class
2. In the General section, set the Value Extractor > Type property to Reference
3. Set the Referenced Extractor property to the Extractors • Invoice Number > [Values] Invoice Number Data Type
4. Set the Feature Extractor > Type property to Reference
5. Set the Referenced Extractor property to the Invoices • (local resources) > _Global > Invoice Field Labels Data Type
6. Select Acme (1)
7. Click Run Extraction

    img/4-5/014

    img/4-5/015

    img/4-5/016
---
1. In the candidate list, find the value that has the appropriate feature(s) to train
2. Right click and select Train As Positive

    img/4-5/019
---
1. Select Spartan (4)
2. Click to edit the Context Zones property
3. In the Context Zones window, edit the dimensions as follows:
    1. Zone 1:
        1. Left: `-4`
        2. Top: `-0.02`
        3. Right: `0.35`
        4. Bottom: `0.1`
    2. Zone 2:
        1. Left: `-1`
        2. Top: `-0.25`
        3. Right: `0.375`
        4. Bottom: `0.05`
2. Click OK

    img/4-5/027

    img/4-5/029

    img/4-5/031

    img/4-5/032
---
1. Click on the [Values] Invoice Number Data Type
2. In the Deduplication section, set the Deduplicate Locations property to ==True==

    img/4-5/038
---
1. Click on the Invoice Number Field Class
2. In the Output section, set the Minimum Confidence property to ==70%==

    img/4-5/042
---
1. In the Data Model, select the Invoice Number Data Field
2. In the General section, set the Value Extractor > Type property to Reference
3. Set the Referenced Extractor property to the Invoices • (local resources) > Extractors > Invoice Number Field Class.
4. In the Behavior section, set the Required property to ==True==

    img/4-5/043

    img/4-5/044

    img/4-5/045

## PO Number/Exclusion Extractor
---
1. Right click on the (local resources) > _Global folder and select Add > Data Type...
2. Name it ==Addresses, Phone Numbers==
3. In the Data Extraction section, click to edit Referenced Extractors

    img/4-6/001

    img/4-6/003

    img/4-6/004
---
1. In the Referenced Extractors window, click Add...
2. In the Select Items window, expand (root) • Data Extraction > Data Types > Training Materials > Base Types and check the following:
    1. Address
    2. Phone Number
3. Click OK to close the Select Items window
4. Click OK to close the Referenced Extractors window

    img/4-6/005

    img/4-6/007

    img/4-6/008

    img/4-6/009
---
1. Right click on the Extractors folder and select Add > Field Class...
2. Name it ==PO Number==
3. Create a child Data Type of PO Number and name it ==[Values] PO Number==
4. On the [Values] PO Number Data Type, click to edit the Pattern

    img/4-6/013

    img/4-6/015

    img/4-6/016
---
1. In the Value Pattern editor, type:
    ```
    [0-9]{4,16}
    ```
2. Click OK

    img/4-6/018
---
1. On the [Values] PO Number Data Type, in the Data Extraction section, set the Exclusion Extractor > Type property to ==Reference==
2. Set the Referenced Extractor property to the Invoices • (local resources) > _Global > ==Addresses, Phone Numbers== Data Type

    img/4-6/021
---
1. Click on the PO Number Field Class
2. In the General section, set the Value Extractor > Type property to Reference
3. Set the Referenced Extractor property to the Extractors • PO Number > ==[Values] PO Number== Data Type
4. In the General section, set the Feature Extractor > Type property to Reference
5. Set the Referenced Extractor property to the Invoices • (local resources) > _Global > Invoice Field Labels Data Type

    img/4-6/025

    img/4-6/027
---
1. Select Acme (1)
2. Click Run Extraction
3. In the candidate list, find the value that has the appropriate feature(s) to train
4. Right click and select Train As Positive

    img/4-6/029

    img/4-6/030
---
1. Click to edit the Context Zones property
2. In the Context Zones window, edit the dimensions as follows:
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
3. Click OK
4. In the Output section, set the Minimum Confidence property to ==70%==

    img/4-6/034

    img/4-6/036

    img/4-6/038

    img/4-6/041
---
1. In the Data Model, select the PO Number Data Field
2. In the General section, set the Value Extractor > Type property to Reference
3. Set the Referenced Extractor property to the Invoices • (local resources) > Extractors > PO Number Field Class.
4. In the Behavior section, set the Required property to ==True==

    img/4-6/042

    img/4-6/044

    img/4-6/046

## Invoice Amount
---
1. Right click on the Extractors folder and select Add > Field Class...
2. Name it ==Invoice Amount==

    img/4-7/001

    img/4-7/003
---
1. In the General section, set the Value Extractor > Type property to Reference
3. Set the Referenced Extractor property to the Data Extraction • Data Types > Downloads > Base Types > ==Currency Data== Type
4. Set the Feature Extractor > Type property to Reference
5. Set the Referenced Extractor property to the Invoices • (local resources) > _Global > Invoice Field Labels Data Type

    img/4-7/005

    img/4-7/007
---
1. Select Acme (1)
2. Click Run Extraction
3. In the candidate list, find the value that has the appropriate feature(s) to train
4. Right click and select Train As Positive

    img/4-7/011

    img/4-7/012
---
1. Click to edit the Context Zones property
2. In the Context Zones window, edit the dimensions as follows:
    1. Zone 1:
        1. Left: `-4`
        2. Top: `-0.05`
        3. Right: `0.2`
        4. Bottom: `0.1`
    2. Zone 2:
        1. Left: `-0.58`
        2. Top: `-0.36`
        3. Right: `0.3`
        4. Bottom: `0.05`
3. Click OK
4. In the Output section, set the Minimum Confidence property to ==70%==

    img/4-7/013

    img/4-7/015

    img/4-7/017

    img/4-7/021
---
1. In the Data Model, select the Invoice Amount Data Field
2. In the General section, set the Value Type to ==Decimal==
3. Expand Value Type and set the Format Specifier property to ==c2==

    img/4-7/022

    img/4-7/025

    img/4-7/028
---
1. In the General section, set the Value Extractor > Type property to Reference
2. Set the Referenced Extractor property to the Invoices • (local resources) > Extractors > Invoice Amount Field Class.
3. In the Behavior section, set the Required property to ==True==

    img/4-7/029

    img/4-7/030

    img/4-7/032

## Payment Terms
---
1. In the Data Model, select the PO Number Data Field
2. In the General section, set the Value Extractor > Type property to Internal
3. Click to edit the pattern

    img/4-8/001

    img/4-8/003
---
1. Select Acme (16)
2. In the Value Pattern editor, type:
    ```
    n[eo]t ([@Number]{2})
    ```
3. In the Output Format editor, type:
    ```
    Net {1:Number}
    ```
4. Click OK

    img/4-8/007
---
1. On the Payment Terms Data Field, set the Required Property to ==True==

    img/4-8/010

## Freight
---
1. Right click on the Extractors folder and select Add > Data Type...
2. Name it ==Freight==

    img/4-9/001

    img/4-9/003
---
1. As child extractors under the Freight Data Type, create:
    1. Data Format: ==Acme==
    2. Data Format: ==Enid==
    3. Data Format: ==Express==
    4. Data Format: ==Standard==
    5. Data Type: ==Spartan==

    img/4-9/004

    img/4-9/006

    img/4-9/010

    img/4-9/012
---
Edit the patterns for each of the Data Formats:
- Acme
    
    *Make sure to enable Tab Marking*

    ```tab="Value Pattern"
    ([@Number.]{3,12})
    ```

    ```tab="Look Ahead Pattern"
    WS.FREIGHT[0o]231[^\n]+\n
    [^\n]+\n
    [^\t]+\t
    [^\t]+\t
    ```

    ```tab="Look Behind Pattern"
    \r\n
    ```

    ```tab="Output Format"
    {1:Number}
    ```

- Enid

    ```tab="Value Pattern"
    ([@Number.]{3,12})
    ```

    ```tab="Look Ahead Pattern"
    020-0027[^\n]*?\n[^\r]*?
    ```

    ```tab="Look Behind Pattern"
    \r\n
    ```

    ```tab="Output Format"
    {1:Number}
    ```

- Express

    ```tab="Value Pattern"
    ([@Number.]{3,12})
    ```

    ```tab="Look Ahead Pattern"
    shipping charge:?[^0-9]{0,4}
    ```

    ```tab="Look Behind Pattern"
    
    ```

    ```tab="Output Format"
    {1:Number}
    ```

- Standard

    ```tab="Value Pattern"
    ([@Number.]{3,12})
    ```

    ```tab="Look Ahead Pattern"
    shipping charge\s
    ```

    ```tab="Look Behind Pattern"
    
    ```

    ```tab="Output Format"
    {1:Number}
    ```

    img/4-9/017

    img/4-9/019

    img/4-9/021

    img/4-9/023
---
1. Create two child Data Formats of the Spartan Data Type:
    1. Freight
    2. Value 1
2. Edit the Value Patterns for each of the Data Formats:

    ```tab="Freight"
    freight
    ```

    ```tab="Value 1"
    [\d.]+
    ```

3. Right click on the Value 1 Data Format and select Clone
4. Name the clone ==Value 2==

    img/4-9/025

    img/4-9/027

    img/4-9/029

    img/4-9/023
---
1. Select the Spartan Data Type
2. Set the Collation Method property to ==Ordered Array==
3. Expand Collation and set the Vertical Layout property to ==Enabled==
4. Expand the Vertical Layout property
5. Set the Maximum Distance property to ==0.25==
6. Set the Combine Method property to ==Sum==

    img/4-9/035

    img/4-9/037

    img/4-9/039

    img/4-9/045
---
1. In the Data Model, select the Freight Data Field
2. In the General section, set the Value Type to ==Decimal==
3. Expand Value Type and set the Format Specifier property to ==c2==
4. In the Expressions section, set the Default Value Expression property to ==0==

    img/4-9/050

    img/4-9/052

    img/4-9/054

    img/4-9/056
---
1. In the General section, set the Value Extractor > Type property to Reference
2. Set the Referenced Extractor property to the Invoices • (local resources) > Extractors > ==Freight== Data Type.

    img/4-9/058

    img/4-9/059

## Discount
---





---

    img/4-10/0