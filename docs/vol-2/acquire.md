# Acquire

## Importing

### Importing a pre-made batch

!!! abstract "(root)"
    1. Right click and select **Import > Compressed Archive.**
    2. Set the **Import Path** property to the ==Grooper ACE - Architect - Volume II - Begin.zip== file.

![](img/1-1/002.png)

![](img/1-1/003.png)

![](img/1-1/005.png)

### Creating an empty test batch

!!! abstract "Batch Processing / Batches / Test"
    1. Right click and select **Add > Batch...**.
    2. Name it ==Invoices==.

![](img/1-1/007.png)

![](img/1-1/009.png)

## Scanning

### Creating a Scanner Profile

!!! abstract "Global Resources / Scanner Profiles"
    1. Right click and select **Add > Scanner Profile...**.
    2. Name it ==Invoices Source Scan==.

![](img/1-1/012.png)

![](img/1-1/014.png)

### Configuring the Scanner Profile

!!! abstract "Global Resources / Scanner Profiles / Invoices Source Scan"
    Change the following properties:

    | Section/Property          | Default Value | New Value                |
    |---------------------------|---------------|--------------------------|
    | General                   |               |                          |
    | **Selected Device**       | -             | ==`File System Import`== |
    | General / Device Settings |               |                          |
    | Import Settings           |               |                          |
    | **Import Source**         | `FileSystem`  | ==`TestBatch`==          |
    | **Source Batch**          | -             | ==`_Source`==            |

![](img/1-1/017.png)

![](img/1-1/022.png)

![](img/1-1/025.png)

### Testing the Scanner Profile

!!! abstract "Global Resources > Scanner Profiles"
    1. Select the **Invoices Source Scan** profile from the **Scanner Profile** dropdown.
    2. Select the **Invoices** batch from the **Batch** dropdown.
    3. Click **Scan**.

![](img/1-1/030.png)

![](img/1-1/032.png)

![](img/1-1/034.png)

![](img/1-1/035.png)

---

# Playground

1. Edit the patterns for each of the Data Formats:
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

| Acme/Standard/Express |               |
|-----------------------|---------------|
| Value Pattern         | `[0-9]{6,16}` |
| Look Ahead Pattern    |               |
| Look Behind Pattern   |               |
| Output Format         |               |

| Enid                |                             |
|---------------------|-----------------------------|
| Value Pattern       | `([A-Z]{3})/([@Number]{8})` |
| Look Ahead Pattern  |                             |
| Look Behind Pattern |                             |
| Output Format       | `{1}{2:Number}`             |

| Spartan             |                                           |
|---------------------|-------------------------------------------|
| Value Pattern       | `([A-Z]{2})([@Number]{2})-([@Number]{6})` |
| Look Ahead Pattern  |                                           |
| Look Behind Pattern |                                           |
| Output Format       | `{1}{2:Number}-{3}`                       |

| Data Format         | Acme/Standard/Express | Enid                        | Spartan                                   |
|---------------------|-----------------------|-----------------------------|-------------------------------------------|
| Value Pattern       | `[0-9]{6,16}`         | `([A-Z]{3})/([@Number]{8})` | `([A-Z]{2})([@Number]{2})-([@Number]{6})` |
| Look Ahead Pattern  |                       |                             |                                           |
| Look Behind Pattern |                       |                             |                                           |
| Output Format       |                       | `{1}{2:Number}`             | `{1}{2:Number}-{3}`                       |


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

    ```tab="Output Format"
    {1:Number}
    ```
    
---
    
1. Create two child Data Formats of the Spartan Data Type:
    1. Freight
    2. Value 1
2. Edit the Value Patterns for each of the Data Formats:

    ```Regex tab="Freight"
    freight
    ```

    ```Regex tab="Value 1"
    [\d.]+
    ```



|        | Zone 1  | Zone 2  |
|--------|---------|---------|
| Left   | `-4`    | `-1`    |
| Top    | `-0.02` | `-0.25` |
| Right  | `0.35`  | `0.375` |
| Bottom | `0.1`   | `0.05`  |



1. Click to edit the Context Zones property
2. In the Context Zones window, delete one of the zones
3. Edit the dimensions of the remaining zone:

    |        | Zone   |
    |--------|--------|
    | Left   | `-2.4` |
    | Top    | `-0.2` |
    | Right  | `0.25` |
    | Bottom | `0.1`  |

4. Click OK to close the Context Zones window
5. In the Output section, set the Minimum Confidence property to ==90%==


1. In the properties panel, set the ESP(tm) Extraction Overrides > Override Extractor property to ==True==
2. Expand Extractor and set the Extractor > Type property to Reference
3. Set the Referenced Extractor property to the Invoices • (local resources) > Overrides > ==[Enid] Sales Tax== Field Class


| Section                     | Default Value                      | New Value         |
|-----------------------------|------------------------------------|-------------------|
| General                     |                                    |                   |
| **IP Profile**              | -                                  | ==`OCR Cleanup`== |
| **Bound Region Processing** | ` Disabled`                        | ==`Enabled`==     |
| Synthesis Options           |                                    |                   |
| Synthesis Options           | **Segment End Ratio**              | `125%`            |
| Synthesis Options           | **Segment Reprocessing Threshold** | `90%`             |
| Iterative Processing        | **OCR Iterations**                 | `2`               |
| Iterative Processing        | **Enable Cell Validation**         | `True`            |
| Iterative Processing        | **Rows**                           | `1`               |
| Iterative Processing        | **Columns**                        | `4`               |
| Iterative Processing        | **Skip First Column**              | `True`            |
| Results Filtering           | **Minimum Character Confidence**   | `20%`             |
| Results Filtering           | **Eliminate Isolated Symbols**     | `True`            |
| Document Structure          | **Orientation**                    | `None`            |
| Document Structure          | **Perform Sectioning**             | `True`            |
| Processing Options          | **Reject Questionable Lines**      | `True`            |
| Processing Options          | **Reject Questionable Characters** | `([@Number.]{3,12})`            |


| Section                            | Default Value | New Value         |
|-----------------------------------|---------------|-------------------|
| General                           |               |                   |
| **IP Profile**                     | -             | ==`OCR Cleanup`== |
| **Bound Region Processing**        | `Disabled`    | ==`Enabled`==     |
| Synthesis Options                  |               |                   |
| **Segment End Ratio**              |               | `125%`            |
| **Segment Reprocessing Threshold** |               | `90%`             |
| Iterative Processing               |               |                   |
| **OCR Iterations**                 |               | `2`               |
| **Enable Cell Validation**         |               | `True`            |
| **Rows**                           |               | `1`               |
| **Columns**                        |               | `4`               |
| **Skip First Column**              |               | `True`            |
| Results Filtering                  |               |                   |
| **Minimum Character Confidence**   |               | `20%`             |
| **Eliminate Isolated Symbols**     |               | `True`            |
| Document Structure                 |               |                   |
| **Orientation**                    |               | `None`            |
| **Perform Sectioning**             |               | `True`            |
| Processing Options                 |               |                   |
| **Reject Questionable Lines**      |               | `True`            |
| **Reject Questionable Characters** |               | `True`            |



```clojure
Disabled
2
True
-0.02
([@Number.]{3,12})
{1}
020-0027[^\n]*?\n[^\r]*?
WS.FREIGHT[0o]231[^\n]+\n
[^\n]+\n
[^\t]+\t
[^\t]+\t
```

==`#!clojure OCR Cleanup`==