## Invoice Date

!!! abstract "Content Models / Invoices / **(data model)** ![](../assets/img/thumbs/ace_data-model.png)"
    1. Right click and select **Contents --> Add Multiple Items...**.
    2. In the **Contents • Add Multiple Items** window, change the following property value(s):

        | Property       | Default Value | New Value                                                                                                                                                                                             |
        | -------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
        | General        |               |                                                                                                                                                                                                       |
        | **Item Names** | `-`           | ==`Invoice Number`==<br>==`PO Number`==<br>==`Invoice Date`==<br>==`Freight`==<br>==`Sales Tax`==<br>==`Discount`==<br>==`Invoice Amount`==<br>==`Payment Terms`==<br>==`Ship To`==<br>==`Remit To`== |

    3. Press **Execute**.

![](../assets/img/vol-2/4-1/005.png)

![](../assets/img/vol-2/4-1/008.png)

![](../assets/img/vol-2/4-1/010.png)

!!! abstract "Content Models / Invoices / **(local resources)** ![](../assets/img/thumbs/ace_folder-local-resources.png)"
    1. Right click and select **Add --> Folder...**.
    2. Name it ==Extractors==.

![](../assets/img/vol-2/4-1/016.png)

![](../assets/img/vol-2/4-1/018.png)

!!! abstract "Content Models / Invoices / (local resources) / **Extractors** ![](../assets/img/thumbs/ace_folder-local-resources.png)"
    1. Right click and select **Add --> Field Class...**.
    2. Name it ==Invoice Date==.

![](../assets/img/vol-2/4-1/019.png)

![](../assets/img/vol-2/4-1/021.png)

!!! abstract "Content Models / Invoices / (local resources) / Extractors / **Invoice Date** ![](../assets/img/thumbs/ace_field-class.png)"
    Change the following property value(s):

    | Property                     | Default Value | New Value       |
    | ---------------------------- | ------------- | --------------- |
    | General                      |               |                 |
    | **Value Extractor**          |               |                 |
    | --> **Type**                 | `none`        | ==`Reference`== |
    | --> **Referenced Extractor** | `-`           | ==`Date`==      |

![](../assets/img/vol-2/4-1/029.png)

!!! abstract "Content Models / Invoices / (local resources) / Extractors / **Invoice Date** ![](../assets/img/thumbs/ace_field-class.png)"
    Change the following property value(s):

    | Property                     | Default Value | New Value       |
    | ---------------------------- | ------------- | --------------- |
    | General                      |               |                 |
    | **Feature Extractor**        |               |                 |
    | --> **Type**                 | `none`        | ==`Reference`== |
    | --> **Referenced Extractor** | `-`           | ==`Phrases`==   |

![](../assets/img/vol-2/4-1/031.png)

!!! abstract "Content Models / Invoices / (local resources) / Extractors / **Invoice Date** ![](../assets/img/thumbs/ace_field-class.png)"
    1. Select **Acme (1)**.
    2. Press **Run Extraction**.
    3. In the candidate list, right click on the ==11/14/2008== value and select **Train As Positive**.

![](../assets/img/vol-2/4-1/034.png)

!!! abstract "Content Models / Invoices / (local resources) / Extractors / **Invoice Date** ![](../assets/img/thumbs/ace_field-class.png)"
    1. Select **Standard (2)**.
    2. Select both of the ==11/11/2008== candidates that have correct features.
    3. Right click on either of them and select **Train As Positive**.

![](../assets/img/vol-2/4-1/039.png)

!!! abstract "Content Models / Invoices / (local resources) / Extractors / **Invoice Date** ![](../assets/img/thumbs/ace_field-class.png)"
    1. Select **Express (3)**.
    2. Right click on the ==12/2/2008== candidate with **58.1689%** confidence and select **Train As Positive**.

![](../assets/img/vol-2/4-1/043.png)

!!! abstract "Content Models / Invoices / (local resources) / Extractors / **Invoice Date** ![](../assets/img/thumbs/ace_field-class.png)"
    1. Select **Spartan (4)**.
    2. In the **Context Zone Options** section, click to edit the **Context Zones**.

![](../assets/img/vol-2/4-1/048.png)

!!! abstract "Content Models / Invoices / (local resources) / Extractors / **Invoice Date** ![](../assets/img/thumbs/ace_field-class.png)"
    1. In the **Context Zones** window, edit the dimensions as follows:

    | Property   | Zone 1       | Zone 2      |
    | ---------- | ------------ | ----------- |
    | **Left**   | ==`-3.278`== | ==`-0.67`== |
    | **Top**    | ==`-0.054`== | ==`-0.67`== |
    | **Right**  | ==`0.312`==  | ==`0.5`==   |
    | **Bottom** | ==`0.054`==  | ==`0.04`==  |

    2. Press **OK**.

![](../assets/img/vol-2/4-1/050.png)

![](../assets/img/vol-2/4-1/052.png)

!!! abstract "Content Models / Invoices / (local resources) / Extractors / **Invoice Date** ![](../assets/img/thumbs/ace_field-class.png)"
    1. Select **Enid (5)**.
    2. In the Output section, set the **Minimum Confidence** property to ==70%==.

![](../assets/img/vol-2/4-1/060.png)

![](../assets/img/vol-2/4-1/062.png)

!!! abstract "Content Models / Invoices / (data model) / **Invoice Date** ![](../assets/img/thumbs/ace_data-field.png)"
    Change the following property value(s):

    | Property                     | Default Value | New Value          |
    | ---------------------------- | ------------- | ------------------ |
    | General                      |               |                    |
    | **Value Extractor**          |               |                    |
    | --> **Type**                 | `None`        | ==`Reference`==    |
    | --> **Referenced Extractor** | `-`           | ==`Invoice Date`== |
    | Behavior                     |               |                    |
    | **Required**                 | `False`       | ==`True`==         |

![](../assets/img/vol-2/4-1/063.png)

![](../assets/img/vol-2/4-1/065.png)

![](../assets/img/vol-2/4-1/068.png)

## Ship To

!!! abstract "Content Models / Invoices / (local resources) / **Extractors** ![](../assets/img/thumbs/ace_folder.png)"
    1. Right click and select **Add --> Field Class...**.
    2. Name it ==Ship To==.

![](../assets/img/vol-2/4-2/002.png)

![](../assets/img/vol-2/4-2/004.png)

!!! abstract "Content Models / Invoices / (local resources) / Extractors / **Ship To** ![](../assets/img/thumbs/ace_field-class.png)"
    1. Right click and select **Add --> Data Type...**.
    2. Name it ==[Features] Ship To==.

![](../assets/img/vol-2/4-2/005.png)

![](../assets/img/vol-2/4-2/006.png)

!!! abstract "Content Models / Invoices / (local resources) / Extractors / Ship To / **[Features] Ship To** ![](../assets/img/thumbs/ace_data-type.png)"
    1. In the Data Extraction section, click to edit the **Pattern**.
    2. Edit the pattern(s):

        ```tab="Value Pattern"
        ship to|shipped to|ship
        ```

        ```tab="Output Format"
        ship to
        ```

    3. Press **OK**.

![](../assets/img/vol-2/4-2/007.png)

![](../assets/img/vol-2/4-2/009.png)

!!! abstract "Content Models / Invoices / (local resources) / Extractors / **Ship To** ![](../assets/img/thumbs/ace_field-class.png)"
    Change the following property value(s):

    | Property                     | Default Value | New Value       |
    | ---------------------------- | ------------- | --------------- |
    | General                      |               |                 |
    | **Value Extractor**          |               |                 |
    | --> **Type**                 | `none`        | ==`Reference`== |
    | --> **Referenced Extractor** | `-`           | ==`Address`==   |

![](../assets/img/vol-2/4-2/012.png)

![](../assets/img/vol-2/4-2/013.png)

!!! abstract "Content Models / Invoices / (local resources) / Extractors / **Ship To** ![](../assets/img/thumbs/ace_field-class.png)"
    Change the following property value(s):

    | Property                     | Default Value | New Value                |
    | ---------------------------- | ------------- | ------------------------ |
    | General                      |               |                          |
    | **Feature Extractor**        |               |                          |
    | --> **Type**                 | `none`        | ==`Reference`==          |
    | --> **Referenced Extractor** | `-`           | ==`[Features] Ship To`== |

![](../assets/img/vol-2/4-2/014.png)

!!! abstract "Content Models / Invoices / (local resources) / Extractors / **Ship To** ![](../assets/img/thumbs/ace_field-class.png)"
    1. In the **Context Zone Options** section, click to edit the **Context Zones**.
    2. In the **Context Zones** window, delete one of the zones.
    3. For the remaining zone, edit the dimensions as follows:

        | Property   | Zone        |
        | ---------- | ----------- |
        | **Left**   | ==`-1.25`== |
        | **Top**    | ==`-0.54`== |
        | **Right**  | ==`0.73`==  |
        | **Bottom** | ==`0.13`==  |

    4. Press **OK**.
    5. Press **Run Extraction**.

![](../assets/img/vol-2/4-2/015.png)

![](../assets/img/vol-2/4-2/018.png)

!!! abstract "Content Models / Invoices / (local resources) / Extractors / **Ship To** ![](../assets/img/thumbs/ace_field-class.png)"
    1. In the candidate list, find the value that has features that can be trained.
    2. Right click on that value and select **Train As Positive**.
    3. Change the following property value(s):
        
        | Property               | Default Value | New Value |
        | ---------------------- | ------------- | --------- |
        | Output                 |               |           |
        | **Minimum Confidence** | `0%`          | ==`70%`== |

![](../assets/img/vol-2/4-2/023.png)

![](../assets/img/vol-2/4-2/030.png)

!!! abstract "Content Models / Invoices / (data model) / **Ship To** ![](../assets/img/thumbs/ace_data-field.png)"
    Change the following property value(s):

    | Property                     | Default Value | New Value       |
    | ---------------------------- | ------------- | --------------- |
    | General                      |               |                 |
    | **Value Extractor**          |               |                 |
    | --> **Type**                 | `None`        | ==`Reference`== |
    | --> **Referenced Extractor** | `-`           | ==`Ship To`==   |
    | Behavior                     |               |                 |
    | **Required**                 | `False`       | ==`True`==      |

![](../assets/img/vol-2/4-2/031.png)

![](../assets/img/vol-2/4-2/032.png)

![](../assets/img/vol-2/4-2/033.png)

## Remit To

!!! abstract "Content Models / Invoices / (local resources) / **Extractors** ![](../assets/img/thumbs/ace_folder.png)"
    1. Right click and select **Add --> Field Class...**.
    2. Name it ==Remit To==.
    3. Change the following property value(s):

        | Property                     | Default Value | New Value       |
        | ---------------------------- | ------------- | --------------- |
        | General                      |               |                 |
        | **Value Extractor**          |               |                 |
        | --> **Type**                 | `None`        | ==`Reference`== |
        | --> **Referenced Extractor** | `-`           | ==`Address`==   |

![](../assets/img/vol-2/4-3/001.png)

![](../assets/img/vol-2/4-3/003.png)

![](../assets/img/vol-2/4-3/004.png)

!!! abstract "Content Models / Invoices / (local resources) / Extractors / **Remit To** ![](../assets/img/thumbs/ace_field-class.png)"
    Change the following property value(s):

    | Property              | Default Value     | New Value         |
    | --------------------- | ----------------- | ----------------- |
    | General               |                   |                   |
    | **Feature Extractor** |                   |                   |
    | --> **Type**          | `None`            | ==`Internal`==    |
    | --> **Pattern**       | *(Click to edit)* | *(Click to edit)* |

![](../assets/img/vol-2/4-3/006.png)

!!! abstract "Content Models / Invoices / (local resources) / Extractors / **Remit To** ![](../assets/img/thumbs/ace_field-class.png)"
    1. Edit the pattern(s):

        ```tab="Value Pattern"
        remit to|mail payment to|checks to
        ```

        ```tab="Output Format"
        remit to
        ```

    2. Select **Standard (2)**.
    3. Switch to the **Properties** tab.
    4. Change the following property value(s):

        | Property                   | Default Value | New Value        |
        | -------------------------- | ------------- | ---------------- |
        | General                    |               |                  |
        | **Mode**                   | `RegEx`       | ==`FuzzyRegEx`== |
        | Fuzzy Matching Options     |               |                  |
        | **Fuzzy Match Weightings** |               |                  |
        | --> **Local Entries**      | `-`           | ==`li=0.25`==    |

    5.  Press **OK** to close the List Editor.
    6.  Press **OK** to close the Pattern Editor.

![](../assets/img/vol-2/4-3/023-1.png)

![](../assets/img/vol-2/4-3/014.png)

![](../assets/img/vol-2/4-3/019.png)

![](../assets/img/vol-2/4-3/021.png)

!!! abstract "Content Models / Invoices / (local resources) / Extractors / **Remit To** ![](../assets/img/thumbs/ace_field-class.png)"
    1. In the **Context Zone Options** section, click to edit the **Context Zones**.
    2. In the **Context Zones** window, delete one of the zones.
    3. For the remaining zone, edit the dimensions as follows:

        | Property   | Zone        |
        | ---------- | ----------- |
        | **Left**   | ==`-2.55`== |
        | **Top**    | ==`-0.55`== |
        | **Right**  | ==`1`==     |
        | **Bottom** | ==`0.15`==  |

    4. Press **OK**.

![](../assets/img/vol-2/4-3/027.png)

![](../assets/img/vol-2/4-3/028.png)

!!! abstract "Content Models / Invoices / (local resources) / Extractors / **Remit To** ![](../assets/img/thumbs/ace_field-class.png)"
    1. Select **Acme (1)**.
    2. In the candidate list, find the value that has features that can be trained.
    3. Right click on that value and select **Train As Positive**.
    4. Change the following property value(s):
        
        | Property               | Default Value | New Value |
        | ---------------------- | ------------- | --------- |
        | Output                 |               |           |
        | **Minimum Confidence** | `0%`          | ==`70%`== |

![](../assets/img/vol-2/4-3/033.png)

![](../assets/img/vol-2/4-3/034.png)

!!! abstract "Content Models / Invoices / (data model) / **Remit To** ![](../assets/img/thumbs/ace_data-field.png)"
    Change the following property value(s):

    | Property                     | Default Value | New Value       |
    | ---------------------------- | ------------- | --------------- |
    | General                      |               |                 |
    | **Value Extractor**          |               |                 |
    | --> **Type**                 | `None`        | ==`Reference`== |
    | --> **Referenced Extractor** | `-`           | ==`Remit To`==  |
    | Behavior                     |               |                 |
    | **Required**                 | `False`       | ==`True`==      |

![](../assets/img/vol-2/4-3/040.png)

![](../assets/img/vol-2/4-3/041.png)

## Feature List

!!! abstract "Batch Processing / Batches / Test / **Invoices** ![](../assets/img/thumbs/ace_batch.png)"
    1. Switch to the **Batch Viewer** tab.
    2. Collapse the Node Tree using the button in the toolbar.
    3. Open Notepad.exe alongside Grooper Design Studio.

![](../assets/img/vol-2/4-4/001.png)

![](../assets/img/vol-2/4-4/002.png)

![](../assets/img/vol-2/4-4/003.png)

!!! abstract "Batch Processing / Batches / Test / **Invoices** ![](../assets/img/thumbs/ace_batch.png)"
    1. Select **Acme (1)**.
    2. In Notepad, begin typing a list of all words and phrases used to identify invoice items.
    3. Do this for the remaining four vendors.
    4. When complete, copy everything in Notepad to your clipboard.
    5. Restore the default Grooper Design Studio view.

![](../assets/img/vol-2/4-4/004.png)

![](../assets/img/vol-2/4-4/005.png)

![](../assets/img/vol-2/4-4/007.png)

!!! abstract "Content Models / Invoices / **(local resources)** ![](../assets/img/thumbs/ace_folder-local-resources.png)"
    1. Right click and select **Add --> Folder...**.
    2. Name it ==Lexicons==.
    3. Right click on the **Lexicons** folder and select **Add --> Lexicon...**.
    4. Name it ==Invoice Field Labels==.

![](../assets/img/vol-2/4-4/009.png)

![](../assets/img/vol-2/4-4/011.png)

![](../assets/img/vol-2/4-4/014.png)

!!! abstract "Content Models / Invoices / (local resources) / Lexicons / **Invoice Field Labels** ![](../assets/img/thumbs/ace_lexicon.png)"
    1. Paste your list of field labels in the **Edit Entries** editor.
    2. Right click in the **Edit Entries** editor and select **Sort**.
    3. Right click in the **Edit Entries** editor and select **Deduplicate**.
    4. Normalize synonymous phrases by setting an `=` sign between the original phrase and the desired transformed phrase.
    5. Delete this Lexicon.

![](../assets/img/vol-2/4-4/015.png)

![](../assets/img/vol-2/4-4/016.png)

![](../assets/img/vol-2/4-4/018.png)

!!! abstract "Global Resources / Lexicons / Training Materials / **Invoice Field Labels** ![](../assets/img/thumbs/ace_lexicon.png)"
    1. Right click and select **Copy**.
    2. Right click on the **Invoices --> (local resources) --> Lexicons** folder and select **Paste**.

![](../assets/img/vol-2/4-4/019.png)

![](../assets/img/vol-2/4-4/021.png)

![](../assets/img/vol-2/4-4/022.png)

![](../assets/img/vol-2/4-4/023.png)

!!! abstract "Content Models / Invoices / **(local resources)** ![](../assets/img/thumbs/ace_folder-local-resources.png)"
    1. Right click and select **Add --> Folder...**.
    2. Name it ==_Global==.
    3. Right click on the **_Global** folder and select **Add --> Data Type...**.
    4. Name it ==Invoice Field Labels==.
    5. Click to edit the **Pattern**.

![](../assets/img/vol-2/4-4/024.png)

![](../assets/img/vol-2/4-4/026.png)

![](../assets/img/vol-2/4-4/027.png)

![](../assets/img/vol-2/4-4/028.png)

!!! abstract "Content Models / Invoices / (local resources) / _Global / **Invoice Field Labels** ![](../assets/img/thumbs/ace_data-type.png)"
    1. Edit the pattern(s):

        ```tab="Value Pattern"
        [^\r\n\t\f:]+
        ```

    2. Switch to the **Properties** tab.
    3. Change the following property value(s):

        | Property                  | Default Value | New Value     |
        | ------------------------- | ------------- | ------------- |
        | General                   |               |               |
        | **Preprocessing Options** | `None`        |               |
        | --> **Tab Marking**       | `Disabled`    | ==`Enabled`== |

    4. In the **Lookup and Translation** section, click to edit the **Lookup Options**.

![](../assets/img/vol-2/4-4/029.png)

![](../assets/img/vol-2/4-4/030.png)

![](../assets/img/vol-2/4-4/031.png)

![](../assets/img/vol-2/4-4/032.png)

!!! abstract "Content Models / Invoices / (local resources) / _Global / **Invoice Field Labels** ![](../assets/img/thumbs/ace_data-type.png)"
    1. Change the following property value(s):

        | Property                   | Default Value         | New Value                  |
        | -------------------------- | --------------------- | -------------------------- |
        | General                    |                       |                            |
        | **Vocabulary**             | `(none)`              |                            |
        | --> **Included Lexicons**  | `(0 Lexicon Objects)` | ==`Invoice Field Labels`== |
        | **Enable Translation**     | `False`               | ==`True`==                 |
        | Fuzzy Lookup Options       |                       |                            |
        | **Fuzzy Match Similarity** | `100%`                | ==`90%`==                  |

    2. Press **OK**.

![](../assets/img/vol-2/4-4/036.png)

![](../assets/img/vol-2/4-4/038.png)

![](../assets/img/vol-2/4-4/044.png)

!!! abstract "Content Models / Invoices / (local resources) / _Global / **Invoice Field Labels** ![](../assets/img/thumbs/ace_data-type.png)"
    1. In the **Output Options** section, click to edit **Result Filter**.
    2. In the **Result Filter** window, set the **Output Case** property to ==Lower==.
    3. Press **OK** to close the **Result Filter** window.
    4. Press **OK** to close the **pattern editor** window.

![](../assets/img/vol-2/4-4/047.png)

![](../assets/img/vol-2/4-4/049.png)

!!! abstract "Content Models / Invoices / (local resources) / **_Global** ![](../assets/img/thumbs/ace_folder.png)"
    1. Right click and select **Add --> Data Type...**.
    2. Name it ==[Array] PO Number==.
    3. Add two child Data Formats to the [Array] PO Number Data Type:
        1. Purchase
        2. Order Number

![](../assets/img/vol-2/4-4/056.png)

![](../assets/img/vol-2/4-4/060.png)

!!! abstract "Content Models / Invoices / (local resources) / _Global / [Array] PO Number / **Purchase** ![](../assets/img/thumbs/ace_data-format.png)"
    1. Select **Enid (5)**.
    2. Edit the pattern(s):

        ```tab="Value Pattern"
        purchase
        ```

        ```tab="Output Format"
        po
        ```

![](../assets/img/vol-2/4-4/061.png)

![](../assets/img/vol-2/4-4/062.png)

!!! abstract "Content Models / Invoices / (local resources) / _Global / [Array] PO Number / **Order Number** ![](../assets/img/thumbs/ace_data-format.png)"
    1. Select **Enid (5)**.
    2. Edit the pattern(s):

        ```tab="Value Pattern"
        order number
        ```

        ```tab="Output Format"
        number
        ```

![](../assets/img/vol-2/4-4/063.png)

!!! abstract "Content Models / Invoices / (local resources) / _Global / **[Array] PO Number** ![](../assets/img/thumbs/ace_data-type.png)"
    Change the following property value(s):

    | Property                        | Default Value | New Value                |
    | ------------------------------- | ------------- | ------------------------ |
    | Output                          |               |                          |
    | **Collation**                   | `Individual`  | ==`Ordered Array`==      |
    | --> **Vertical Layout**         | `Disabled`    | ==`Enabled`==            |
    | --> --> **Maximum Distance**    | `-`           | ==`0.25`==               |
    | --> --> **Alignment**           | `-`           | ==`Center`==             |
    | --> --> **Alignment Tolerance** | `-`           | ==`0.1`==                |
    | --> **Row Separator**           | `-`           | ==`␣`== (a single space) |

![](../assets/img/vol-2/4-4/064.png)

![](../assets/img/vol-2/4-4/073.png)

!!! abstract "Content Models / Invoices / (local resources) / **_Global** ![](../assets/img/thumbs/ace_folder.png)"
    1. Drag the **[Array] PO Number** Data Type on top of the **Invoice Field Labels** Data Type.
    2. Select the **Invoice Field Labels** Data Type to ensure the array is now being included in the results.

![](../assets/img/vol-2/4-4/075.png)

![](../assets/img/vol-2/4-4/076.png)

![](../assets/img/vol-2/4-4/077.png)

![](../assets/img/vol-2/4-4/078.png)

## Invoice Number

!!! abstract "Content Models / Invoices / (local resources) / **Extractors** ![](../assets/img/thumbs/ace_folder.png)"
    1. Right click and select **Add --> Field Class...**.
    2. Name it ==Invoice Number==.

![](../assets/img/vol-2/4-5/002.png)

![](../assets/img/vol-2/4-5/004.png)

!!! abstract "Content Models / Invoices / (local resources) / Extractors / **Invoice Number** ![](../assets/img/thumbs/ace_field-class.png)"
    1. Create a child Data Type under the **Invoice Number** Field Class.
    2. Name it ==[Values] Invoice Number==.
    3. Create three child Data Formats under the **[Values] Invoice Number** Data Type:
        1. ==Acme/Standard/Express==
        2. ==Enid==
        3. ==Spartan==

![](../assets/img/vol-2/4-5/005.png)

!!! abstract "Content Models / Invoices / (local resources) / Extractors / Invoice Number / ***** ![](../assets/img/thumbs/ace_data-format.png)"
    Edit the pattern(s) for each of the Data Formats:

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

![](../assets/img/vol-2/4-5/007.png)

![](../assets/img/vol-2/4-5/009.png)

![](../assets/img/vol-2/4-5/011.png)

!!! abstract "Content Models / Invoices / (local resources) / Extractors / **Invoice Number** ![](../assets/img/thumbs/ace_field-class.png)"
    1. Change the following property value(s):

        | Property                     | Default Value | New Value                     |
        | ---------------------------- | ------------- | ----------------------------- |
        | General                      |               |                               |
        | **Value Extractor**          |               |                               |
        | --> **Type**                 | `None`        | ==`Reference`==               |
        | --> **Referenced Extractor** | `-`           | ==`[Values] Invoice Number`== |
        | **Feature Extractor**        |               |                               |
        | --> **Type**                 | `None`        | ==`Reference`==               |
        | --> **Referenced Extractor** | `-`           | ==`Invoice Field Labels`==    |

    5. Select **Acme (1)**.
    6. Press **Run Extraction**.

![](../assets/img/vol-2/4-5/014.png)

![](../assets/img/vol-2/4-5/015.png)

![](../assets/img/vol-2/4-5/016.png)

!!! abstract "Content Models / Invoices / (local resources) / Extractors / **Invoice Number** ![](../assets/img/thumbs/ace_field-class.png)"
    1. In the candidate list, find the value that has the appropriate feature(s) to train.
    2. Right click and select **Train As Positive**.

![](../assets/img/vol-2/4-5/019.png)

!!! abstract "Content Models / Invoices / (local resources) / Extractors / **Invoice Number** ![](../assets/img/thumbs/ace_field-class.png)"
    1. Select **Spartan (4)**.
    2. Click to edit the **Context Zones**.
    3. In the **Context Zones** window, edit the dimensions as follows:

        | Property   | Zone 1      | Zone 2      |
        | ---------- | ----------- | ----------- |
        | **Left**   | ==`-4`==    | ==`-1`==    |
        | **Top**    | ==`-0.02`== | ==`-0.35`== |
        | **Right**  | ==`0.35`==  | ==`0.375`== |
        | **Bottom** | ==`0.1`==   | ==`0.05`==  |

    2. Press **OK**.

![](../assets/img/vol-2/4-5/027.png)

![](../assets/img/vol-2/4-5/029.png)

![](../assets/img/vol-2/4-5/031.png)

![](../assets/img/vol-2/4-5/032.png)

!!! abstract "Content Models / Invoices / (local resources) / Extractors / Invoice Number / **[Values] Invoice Number** ![](../assets/img/thumbs/ace_data-type.png)"
    Change the following property value(s):

    | Property                  | Default Value | New Value  |
    | ------------------------- | ------------- | ---------- |
    | Deduplication             |               |            |
    | **Deduplicate Locations** | `False`       | ==`True`== |

![](../assets/img/vol-2/4-5/038.png)

!!! abstract "Content Models / Invoices / (local resources) / Extractors / **Invoice Number** ![](../assets/img/thumbs/ace_field-class.png)"
    Change the following property value(s):

    | Property               | Default Value | New Value |
    | ---------------------- | ------------- | --------- |
    | Output                 |               |           |
    | **Minimum Confidence** | `0%`          | ==`70%`== |

![](../assets/img/vol-2/4-5/042.png)

!!! abstract "Content Models / Invoices / (data model) / **Invoice Number** ![](../assets/img/thumbs/ace_data-field.png)"
    Change the following property value(s):

    | Property                     | Default Value | New Value            |
    | ---------------------------- | ------------- | -------------------- |
    | General                      |               |                      |
    | **Value Extractor**          |               |                      |
    | --> **Type**                 | `None`        | ==`Reference`==      |
    | --> **Referenced Extractor** | `-`           | ==`Invoice Number`== |
    | Behavior                     |               |                      |
    | **Required**                 | `False`       | ==`True`==           |

![](../assets/img/vol-2/4-5/043.png)

![](../assets/img/vol-2/4-5/044.png)

![](../assets/img/vol-2/4-5/045.png)

## PO Number/Exclusion Extractor

!!! abstract "Content Models / Invoices / (local resources) / **_Global** ![](../assets/img/thumbs/ace_folder.png)"
    1. Right click and select **Add --> Data Type...**.
    2. Name it ==Addresses, Phone Numbers==.
    3. In the Data Extraction section, click to edit **Referenced Extractors**.

![](../assets/img/vol-2/4-6/001.png)

![](../assets/img/vol-2/4-6/003.png)

![](../assets/img/vol-2/4-6/004.png)

!!! abstract "Content Models / Invoices / (local resources) / _Global / **Addresses, Phone Numbers** ![](../assets/img/thumbs/ace_data-type.png)"
    1. In the **Referenced Extractors** window, press **Add...**.
    2. In the **Select Items** window, expand **Data Extraction --> Data Types --> Training Materials --> Base Types** and check the following:
        1. ==Address==
        2. ==Phone Number==
    3. Press **OK** to close the **Select Items** window.
    4. Press **OK** to close the **Referenced Extractors** window.

![](../assets/img/vol-2/4-6/005.png)

![](../assets/img/vol-2/4-6/007.png)

![](../assets/img/vol-2/4-6/008.png)

![](../assets/img/vol-2/4-6/009.png)

!!! abstract "Content Models / Invoices / (local resources) / **Extractors** ![](../assets/img/thumbs/ace_folder.png)"
    1. Right click and select **Add --> Field Class...**.
    2. Name it ==PO Number==.
    3. Create a child Data Type of PO Number and name it ==[Values] PO Number==.
    4. On the **[Values] PO Number** Data Type, click to edit the **Pattern**.

![](../assets/img/vol-2/4-6/013.png)

![](../assets/img/vol-2/4-6/015.png)

![](../assets/img/vol-2/4-6/016.png)

!!! abstract "Content Models / Invoices / (local resources) / Extractors / **[Values] PO Number** ![](../assets/img/thumbs/ace_data-type.png)"
    1. Edit the pattern(s):

        ```tab="Value Pattern"
        [0-9]{4,16}
        ```

    2. Press **OK**.

![](../assets/img/vol-2/4-6/018.png)

!!! abstract "Content Models / Invoices / (local resources) / Extractors / **[Values] PO Number** ![](../assets/img/thumbs/ace_data-type.png)"
    Change the following property value(s):

    | Property                     | Default Value | New Value                      |
    | ---------------------------- | ------------- | ------------------------------ |
    | Data Extraction              |               |                                |
    | **Exclusion Extractor**      |               |                                |
    | --> **Type**                 | `None`        | ==`Reference`==                |
    | --> **Referenced Extractor** | `-`           | ==`Addresses, Phone Numbers`== |

![](../assets/img/vol-2/4-6/021.png)

!!! abstract "Content Models / Invoices / (local resources) / Extractors / **PO Number** ![](../assets/img/thumbs/ace_field-class.png)"
    Change the following property value(s):

    | Property                     | Default Value | New Value                  |
    | ---------------------------- | ------------- | -------------------------- |
    | General                      |               |                            |
    | **Value Extractor**          |               |                            |
    | --> **Type**                 | `None`        | ==`Reference`==            |
    | --> **Referenced Extractor** | `-`           | ==`[Values] PO Number`==   |
    | **Feature Extractor**        |               |                            |
    | --> **Type**                 | `None`        | ==`Reference`==            |
    | --> **Referenced Extractor** | `-`           | ==`Invoice Field Labels`== |

![](../assets/img/vol-2/4-6/025.png)

![](../assets/img/vol-2/4-6/027.png)

!!! abstract "Content Models / Invoices / (local resources) / Extractors / **PO Number** ![](../assets/img/thumbs/ace_field-class.png)"
    1. Select **Acme (1)**.
    2. Press **Run Extraction**.
    3. In the candidate list, find the value that has the appropriate feature(s) to train.
    4. Right click and select **Train As Positive**.

![](../assets/img/vol-2/4-6/029.png)

![](../assets/img/vol-2/4-6/030.png)

!!! abstract "Content Models / Invoices / (local resources) / Extractors / **PO Number** ![](../assets/img/thumbs/ace_field-class.png)"
    1. Click to edit the **Context Zones**.
    2. In the **Context Zones** window, edit the dimensions as follows:

        | Property   | Zone 1       | Zone 2      |
        | ---------- | ------------ | ----------- |
        | **Left**   | ==`-3.278`== | ==`-0.67`== |
        | **Top**    | ==`-0.054`== | ==`-0.37`== |
        | **Right**  | ==`0.312`==  | ==`0.5`==   |
        | **Bottom** | ==`0.054`==  | ==`0.04`==  |

    3. Press **OK**.
    4. Change the following property value(s):

        | Property               | Default Value | New Value |
        | ---------------------- | ------------- | --------- |
        | Output                 |               |           |
        | **Minimum Confidence** | `0%`          | ==`70%`== |

![](../assets/img/vol-2/4-6/034.png)

![](../assets/img/vol-2/4-6/036.png)

![](../assets/img/vol-2/4-6/038.png)

![](../assets/img/vol-2/4-6/041.png)

!!! abstract "Content Models / Invoices / (data model) / **PO Number** ![](../assets/img/thumbs/ace_data-field.png)"
    Change the following property value(s):

    | Property                     | Default Value | New Value       |
    | ---------------------------- | ------------- | --------------- |
    | General                      |               |                 |
    | **Value Extractor**          |               |                 |
    | --> **Type**                 | `None`        | ==`Reference`== |
    | --> **Referenced Extractor** | `-`           | ==`PO Number`== |
    | Behavior                     |               |                 |
    | **Required**                 | `False`       | ==`True`==      |

![](../assets/img/vol-2/4-6/042.png)

![](../assets/img/vol-2/4-6/044.png)

![](../assets/img/vol-2/4-6/046.png)

## Invoice Amount

!!! abstract "Content Models / Invoices / (local resources) / **Extractors** ![](../assets/img/thumbs/ace_folder.png)"
    1. Right click and select **Add --> Field Class...**.
    2. Name it ==Invoice Amount==.

![](../assets/img/vol-2/4-7/001.png)

![](../assets/img/vol-2/4-7/003.png)

!!! abstract "Content Models / Invoices / (local resources) / Extractors / **Invoice Amount** ![](../assets/img/thumbs/ace_field-class.png)"
    Change the following property value(s):

    | Property                     | Default Value | New Value                  |
    | ---------------------------- | ------------- | -------------------------- |
    | General                      |               |                            |
    | **Value Extractor**          |               |                            |
    | --> **Type**                 | `None`        | ==`Reference`==            |
    | --> **Referenced Extractor** | `-`           | ==`Currency`==             |
    | **Feature Extractor**        |               |                            |
    | --> **Type**                 | `None`        | ==`Reference`==            |
    | --> **Referenced Extractor** | `-`           | ==`Invoice Field Labels`== |

![](../assets/img/vol-2/4-7/005.png)

![](../assets/img/vol-2/4-7/007.png)

!!! abstract "Content Models / Invoices / (local resources) / Extractors / **Invoice Amount** ![](../assets/img/thumbs/ace_field-class.png)"
    1. Select **Acme (1)**.
    2. Press **Run Extraction**.
    3. In the candidate list, find the value that has the appropriate feature(s) to train.
    4. Right click and select **Train As Positive**.

![](../assets/img/vol-2/4-7/011.png)

![](../assets/img/vol-2/4-7/012.png)

!!! abstract "Content Models / Invoices / (local resources) / Extractors / **Invoice Amount** ![](../assets/img/thumbs/ace_field-class.png)"
    1. Click to edit the **Context Zones**.
    2. In the **Context Zones** window, edit the dimensions as follows:

        | Property   | Zone 1      | Zone 2      |
        | ---------- | ----------- | ----------- |
        | **Left**   | ==`-4`==    | ==`-0.58`== |
        | **Top**    | ==`-0.05`== | ==`-0.36`== |
        | **Right**  | ==`0.2`==   | ==`0.3`==   |
        | **Bottom** | ==`0.1`==   | ==`0.05`==  |

    3. Press **OK**.
    4. Change the following property value(s):

        | Property               | Default Value | New Value |
        | ---------------------- | ------------- | --------- |
        | Output                 |               |           |
        | **Minimum Confidence** | `0%`          | ==`70%`== |

![](../assets/img/vol-2/4-7/013.png)

![](../assets/img/vol-2/4-7/015.png)

![](../assets/img/vol-2/4-7/017.png)

![](../assets/img/vol-2/4-7/021.png)

!!! abstract "Content Models / Invoices / (data model) / **Invoice Amount** ![](../assets/img/thumbs/ace_data-field.png)"
    Change the following property value(s):

    | Property                 | Default Value | New Value     |
    | ------------------------ | ------------- | ------------- |
    | General                  |               |               |
    | **Value Type**           | `String`      | ==`Decimal`== |
    | --> **Format Specifier** | `-`           | ==`c2`==      |

![](../assets/img/vol-2/4-7/022.png)

![](../assets/img/vol-2/4-7/025.png)

![](../assets/img/vol-2/4-7/028.png)

!!! abstract "Content Models / Invoices / (data model) / **Invoice Amount** ![](../assets/img/thumbs/ace_data-field.png)"
    Change the following property value(s):

    | Property                     | Default Value | New Value            |
    | ---------------------------- | ------------- | -------------------- |
    | General                      |               |                      |
    | **Value Extractor**          |               |                      |
    | --> **Type**                 | `None`        | ==`Reference`==      |
    | --> **Referenced Extractor** | `-`           | ==`Invoice Amount`== |
    | Behavior                     |               |                      |
    | **Required**                 | `False`       | ==`True`==           |

![](../assets/img/vol-2/4-7/029.png)

![](../assets/img/vol-2/4-7/030.png)

![](../assets/img/vol-2/4-7/032.png)

## Payment Terms

!!! abstract "Content Models / Invoices / (data model) / **Payment Terms** ![](../assets/img/thumbs/ace_data-field.png)"
    Change the following property value(s):

    | Property            | Default Value     | New Value         |
    | ------------------- | ----------------- | ----------------- |
    | General             |                   |                   |
    | **Value Extractor** |                   |                   |
    | --> **Type**        | `None`            | ==`Internal`==    |
    | --> **Pattern**     | *(Click to edit)* | *(Click to edit)* |

![](../assets/img/vol-2/4-8/001.png)

![](../assets/img/vol-2/4-8/003.png)

!!! abstract "Content Models / Invoices / (data model) / **Payment Terms** ![](../assets/img/thumbs/ace_data-field.png)"
    1. Select **Acme (16)**.
    2. Edit the pattern(s):

        ```tab="Value Pattern"
        n[eo]t ([@Number]{2})
        ```

        ```tab="Output Format"
        Net {1:Number}
        ```

    3. Press **OK**.

![](../assets/img/vol-2/4-8/007.png)

!!! abstract "Content Models / Invoices / (data model) / **Payment Terms** ![](../assets/img/thumbs/ace_data-field.png)"
    Change the following property value(s):
    
    | Property     | Default Value | New Value  |
    | ------------ | ------------- | ---------- |
    | Behavior     |               |            |
    | **Required** | `False`       | ==`True`== |

![](../assets/img/vol-2/4-8/010.png)

## Freight

!!! abstract "Content Models / Invoices / (local resources) / **Extractors** ![](../assets/img/thumbs/ace_folder.png)"
    1. Right click and select **Add --> Data Type...**.
    2. Name it ==Freight==.

![](../assets/img/vol-2/4-9/001.png)

![](../assets/img/vol-2/4-9/003.png)

!!! abstract "Content Models / Invoices / (local resources) / Extractors / **Freight** ![](../assets/img/thumbs/ace_data-type.png)"
    1. As child extractors under the **Freight** Data Type, create:
        1. Data Format: ==Acme==
        2. Data Format: ==Enid==
        3. Data Format: ==Express==
        4. Data Format: ==Standard==
        5. Data Type: ==Spartan==

![](../assets/img/vol-2/4-9/004.png)

![](../assets/img/vol-2/4-9/006.png)

![](../assets/img/vol-2/4-9/010.png)

![](../assets/img/vol-2/4-9/012.png)

!!! abstract "Content Models / Invoices / (local resources) / Extractors / **Freight** ![](../assets/img/thumbs/ace_data-type.png)"
    Edit the pattern(s) for each of the Data Formats:

    - Acme
        
        *Make sure to enable Tab Marking!*

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

![](../assets/img/vol-2/4-9/017.png)

![](../assets/img/vol-2/4-9/019.png)

![](../assets/img/vol-2/4-9/021.png)

![](../assets/img/vol-2/4-9/023.png)

!!! abstract "Content Models / Invoices / (local resources) / Extractors / Freight / **Spartan** ![](../assets/img/thumbs/ace_data-type.png)"
    1. Create two Data Formats as children of the **Spartan** Data Type:
        - ==Freight==
        - ==Value 1==
    2. Edit the pattern(s):

        - Freight

            ```tab="Value Pattern"
            freight
            ```

        - Value 1

            ```tab="Value Pattern"
            [\d.]+
            ```

    4. Right click on the **Value 1** Data Format and select **Clone**.
    5. Name the clone ==Value 2==.

![](../assets/img/vol-2/4-9/025.png)

![](../assets/img/vol-2/4-9/027.png)

![](../assets/img/vol-2/4-9/029.png)

![](../assets/img/vol-2/4-9/023.png)

!!! abstract "Content Models / Invoices / (local resources) / Extractors / Freight / **Spartan** ![](../assets/img/thumbs/ace_data-type.png)"
    1. Select the **Spartan** Data Type.
    2. Change the following property value(s):

        | Property                     | Default Value | New Value           |
        | ---------------------------- | ------------- | ------------------- |
        | Output                       |               |                     |
        | **Collation**                | `Individual`  | ==`Ordered Array`== |
        | --> **Vertical Layout**      | `Disabled`    | ==`Enabled`==       |
        | --> --> **Maximum Distance** | `-`           | ==`0.25`==          |
        | --> **Combine Method**       | `-`           | ==`Sum`==           |

![](../assets/img/vol-2/4-9/035.png)

![](../assets/img/vol-2/4-9/037.png)

![](../assets/img/vol-2/4-9/039.png)

![](../assets/img/vol-2/4-9/045.png)

!!! abstract "Content Models / Invoices / (data model) / **Freight** ![](../assets/img/thumbs/ace_data-field.png)"
    Change the following property value(s):

    | Property                     | Default Value | New Value     |
    | ---------------------------- | ------------- | ------------- |
    | General                      |               |               |
    | **Value Type**               | `String`      | ==`Decimal`== |
    | --> **Format Specifier**     | `-`           | ==`c2`==      |
    | Expressions                  |               |               |
    | **Default Value Expression** | `-`           | ==`0`==       |

![](../assets/img/vol-2/4-9/050.png)

![](../assets/img/vol-2/4-9/052.png)

![](../assets/img/vol-2/4-9/054.png)

![](../assets/img/vol-2/4-9/056.png)

!!! abstract "Content Models / Invoices / (data model) / **Freight** ![](../assets/img/thumbs/ace_data-field.png)"
    Change the following property value(s):
    
    | Property                     | Default Value | New Value       |
    |------------------------------|---------------|-----------------|
    | General                      |               |                 |
    | **Value Extractor**          |               |                 |
    | --> **Type**                 | `None`        | ==`Reference`== |
    | --> **Referenced Extractor** | `-`           | ==`Freight`==   |

![](../assets/img/vol-2/4-9/058.png)

![](../assets/img/vol-2/4-9/059.png)

## Discount

!!! abstract "Content Models / Invoices / (local resources) / **Extractors** ![](../assets/img/thumbs/ace_folder.png)"
    1. Right click and select **Add --> Data Type...**.
    2. Name it ==Discount==.

![](../assets/img/vol-2/4-10/002.png)

![](../assets/img/vol-2/4-10/003.png)

!!! abstract "Content Models / Invoices / (local resources) / Extractors / **Discount** ![](../assets/img/thumbs/ace_data-type.png)"
    1. Create two Data Types as children of the **Discount** Data Type:
        - ==Acme==
        - ==Enid==
    2. Select the **Acme** Data Type and click to edit its Pattern.

![](../assets/img/vol-2/4-10/004.png)

![](../assets/img/vol-2/4-10/005.png)

![](../assets/img/vol-2/4-10/006.png)

!!! abstract "Content Models / Invoices / (local resources) / Extractors / Discount / **Acme** ![](../assets/img/thumbs/ace_data-type.png)"
    1. Switch to the **Properties** tab.
    2. Change the following property value(s):

        | Property                  | Default Value | New Value     |
        | ------------------------- | ------------- | ------------- |
        | General                   |               |               |
        | **Preprocessing Options** | `None`        |               |
        | --> **Tab Marking**       | `Disabled`    | ==`Enabled`== |

    3. Switch to the **Pattern Editor** tab.
    4. Edit the pattern(s):

        ```tab="Value Pattern"
        [@Number.,]{3,12}
        ```

        ```tab="Look Ahead Pattern"
        cust\.\sdiscount\s%(\t|\r\n)[^\t]+\t
        ```

        ```tab="Output Format"
        {0:Number}
        ```

    5.  Press **OK** to close the **pattern editor** window.

![](../assets/img/vol-2/4-10/008.png)

![](../assets/img/vol-2/4-10/010.png)

!!! abstract "Content Models / Invoices / (local resources) / Extractors / Discount / **Acme** ![](../assets/img/thumbs/ace_data-type.png)"
    1. Select **Acme (14)**.
    2. Change the following property value(s):

        | Property               | Default Value | New Value     |
        |------------------------|---------------|---------------|
        | Output                 |               |               |
        | **Collation**          | `Individual`  | ==`Combine`== |
        | --> **Combine Method** | `-`           | ==`Sum`==     |

![](../assets/img/vol-2/4-10/013.png)

![](../assets/img/vol-2/4-10/015.png)

![](../assets/img/vol-2/4-10/018.png)

!!! abstract "Content Models / Invoices / (local resources) / Extractors / Discount / **Enid** ![](../assets/img/thumbs/ace_data-type.png)"
    Create two Data Formats as children of the **Enid** Data Type:

    - ==[Key] Enid - Discount==
    - ==[Value] Enid - Discount==

![](../assets/img/vol-2/4-10/021.png)

!!! abstract "Content Models / Invoices / (local resources) / Extractors / Discount / Enid / **[Key] Enid - Discount** ![](../assets/img/thumbs/ace_data-format.png)"
    1. Select **Enid (5)**.
    2. Edit the pattern(s):

        ```tab="Value Pattern"
        order discount amount
        ```

![](../assets/img/vol-2/4-10/022.png)

!!! abstract "Content Models / Invoices / (local resources) / Extractors / Discount / Enid / **[Key] Enid - Discount** ![](../assets/img/thumbs/ace_data-format.png)"
    1. Switch to the **Properties** tab.
    2. Change the following property value(s):

        | Property               | Default Value     | New Value         |
        |------------------------|-------------------|-------------------|
        | General                |                   |                   |
        | **Mode**               | `RegEx`           | ==`FuzzyRegEx`==  |
        | Fuzzy Matching Options |                   |                   |
        | **Minimum Similarity** | `90%`             | ==`85%`==         |
        | **Local Entries**      | *(Click to edit)* | *(Click to edit)* |

    3. In the **List Editor** window, enter:
        ```
        )D=0.1
        ```
    4. Press **OK** to close the **List Editor** window.

![](../assets/img/vol-2/4-10/025.png)

![](../assets/img/vol-2/4-10/026.png)

![](../assets/img/vol-2/4-10/028.png)

![](../assets/img/vol-2/4-10/029.png)

!!! abstract "Content Models / Invoices / (local resources) / Extractors / Discount / Enid / **[Value] Enid - Discount** ![](../assets/img/thumbs/ace_data-format.png)"
    Edit the pattern(s):

        ```tab="Value Pattern"
        \d{1,6}\.\d{2,3}
        ```

![](../assets/img/vol-2/4-10/031.png)

![](../assets/img/vol-2/4-10/032.png)

!!! abstract "Content Models / Invoices / (local resources) / Extractors / Discount / **Enid** ![](../assets/img/thumbs/ace_data-type.png)"
    Change the following property value(s):
    
    | Property                  | Default Value | New Value            |
    |---------------------------|---------------|----------------------|
    | Output                    |               |                      |
    | **Collation**             | `Individual`  | ==`Key-Value Pair`== |
    | --> **Horizontal Layout** | `Disabled`    | ==`Enabled`==        |

![](../assets/img/vol-2/4-10/033.png)

![](../assets/img/vol-2/4-10/035.png)

![](../assets/img/vol-2/4-10/038.png)

!!! abstract "Content Models / Invoices / (data model) / **Discount** ![](../assets/img/thumbs/ace_data-field.png)"
    Change the following property value(s):
    
    | Property                     | Default Value | New Value     |
    | ---------------------------- | ------------- | ------------- |
    | General                      |               |               |
    | **Value Type**               | `String`      | ==`Decimal`== |
    | --> **Format Specifier**     | `-`           | ==`c2`==      |
    | Expressions                  |               |               |
    | **Default Value Expression** | `-`           | ==`0`==       |

![](../assets/img/vol-2/4-10/040.png)

![](../assets/img/vol-2/4-10/042.png)

![](../assets/img/vol-2/4-10/044.png)

![](../assets/img/vol-2/4-10/047.png)

!!! abstract "Content Models / Invoices / (data model) / **Discount** ![](../assets/img/thumbs/ace_data-field.png)"
    Change the following property value(s):
    
    | Property                     | Default Value | New Value       |
    |------------------------------|---------------|-----------------|
    | General                      |               |                 |
    | **Value Extractor**          |               |                 |
    | --> **Type**                 | `None`        | ==`Reference`== |
    | --> **Referenced Extractor** | `-`           | ==`Discount`==  |

![](../assets/img/vol-2/4-10/046.png)

![](../assets/img/vol-2/4-10/047.png)

## Sales Tax

!!! abstract "Content Models / Invoices / (local resources) / **Extractors** ![](../assets/img/thumbs/ace_folder.png)"
    1. Right click and select **Add --> Data Type...**.
    2. Name it ==Sales Tax==.
    3. Create two Data Formats as children of the **Sales Tax** Data Type:
        - ==Express==
        - ==Standard==

![](../assets/img/vol-2/4-11/003.png)

![](../assets/img/vol-2/4-11/004.png)
    
!!! abstract "Content Models / Invoices / (local resources) / Extractors / Sales Tax / ***** ![](../assets/img/thumbs/ace_data-format.png)"
    Edit the pattern(s) for each of the Data Formats:
    
    - Express

        ```tab="Value Pattern"
        ([@Number.]{4,12})
        ```

        ```tab="Look Ahead Pattern"
        sales tax:((\r\n)|\s)
        ```

        ```tab="Output Format"
        {0:Number}
        ```

    - Standard

        ```tab="Value Pattern"
        ([@Number.]{3,12})
        ```

        ```tab="Look Ahead Pattern"
        tax\s
        ```

        ```tab="Output Format"
        {1:Number}
        ```

![](../assets/img/vol-2/4-11/006.png)

![](../assets/img/vol-2/4-11/008.png)

!!! abstract "Content Models / Invoices / (data model) / **Sales Tax** ![](../assets/img/thumbs/ace_data-field.png)"
    Change the following property value(s):

    | Property                     | Default Value | New Value     |
    | ---------------------------- | ------------- | ------------- |
    | General                      |               |               |
    | **Value Type**               | `String`      | ==`Decimal`== |
    | --> **Format Specifier**     | `-`           | ==`c2`==      |
    | Expressions                  |               |               |
    | **Default Value Expression** | `-`           | ==`0`==       |

![](../assets/img/vol-2/4-11/009.png)

![](../assets/img/vol-2/4-11/011.png)

![](../assets/img/vol-2/4-11/012.png)

!!! abstract "Content Models / Invoices / (data model) / **Sales Tax** ![](../assets/img/thumbs/ace_data-field.png)"
    Change the following property value(s):
    
    | Property                     | Default Value | New Value       |
    |------------------------------|---------------|-----------------|
    | General                      |               |                 |
    | **Value Extractor**          |               |                 |
    | --> **Type**                 | `None`        | ==`Reference`== |
    | --> **Referenced Extractor** | `-`           | ==`Sales Tax`== |

![](../assets/img/vol-2/4-11/014.png)

!!! abstract "Content Models / Invoices / **(local resources)** ![](../assets/img/thumbs/ace_folder-local-resources.png)"
    1. Right click and select **Add --> New Folder...**.
    2. Name it ==Overrides==.

![](../assets/img/vol-2/4-11/018.png)

!!! abstract "Content Models / Invoices / (local resources) / **Overrides** ![](../assets/img/thumbs/ace_folder.png)"
    1. In the **Overrides** folder, add a Field Class.
    2. Name it ==[Enid] Sales Tax==.

![](../assets/img/vol-2/4-11/020.png)

!!! abstract "Content Models / Invoices / (local resources) / Overrides / **[Enid] Sales Tax** ![](../assets/img/thumbs/ace_field-class.png)"
    1. Change the following property value(s):

        | Property            | Default Value     | New Value         |
        | ------------------- | ----------------- | ----------------- |
        | General             |                   |                   |
        | **Value Extractor** |                   |                   |
        | --> **Type**        | `None`            | ==`Internal`==    |
        | --> **Pattern**     | *(Click to edit)* | *(Click to edit)* |

    2. Click to edit the pattern:

        ```tab="Value Pattern"
        ([@Number.]{2,12})
        ```

        ```tab="Output Format"
        {1:Number}
        ```

    3. Press **OK** to close the **pattern editor** window.
    4. Change the following property value(s):

        | Property                     | Default Value | New Value       |
        |------------------------------|---------------|-----------------|
        | General                      |               |                 |
        | **Feature Extractor**        |               |                 |
        | --> **Type**                 | `None`        | ==`Reference`== |
        | --> **Referenced Extractor** | `-`           | ==`Phrases`==   |

![](../assets/img/vol-2/4-11/021.png)

![](../assets/img/vol-2/4-11/023.png)

![](../assets/img/vol-2/4-11/024.png)

!!! abstract "Content Models / Invoices / (local resources) / Overrides / **[Enid] Sales Tax** ![](../assets/img/thumbs/ace_field-class.png)"
    1. Change the following property value(s):

        | Property              | Default Value     | New Value         |
        |-----------------------|-------------------|-------------------|
        | Context Scope Options |                   |                   |
        | **Context Zones**     | *(Click to edit)* | *(Click to edit)* |

    2. In the **Context Zones** window, delete one of the zones.
    3. For the remaining zone, edit the dimensions as follows:

        | Property   | Zone       |
        | ---------- | ---------- |
        | **Left**   | ==`-2.4`== |
        | **Top**    | ==`-0.2`== |
        | **Right**  | ==`0.25`== |
        | **Bottom** | ==`0.1`==  |

    4. Press **OK** to close the **Context Zones** window.
    5. Change the following property value(s):

        | Property               | Default Value | New Value |
        |------------------------|---------------|-----------|
        | Output                 |               |           |
        | **Minimum Confidence** | `0%`          | ==`90%`== |

![](../assets/img/vol-2/4-11/027.png)

![](../assets/img/vol-2/4-11/030.png)

![](../assets/img/vol-2/4-11/033.png)

!!! abstract "Content Models / Invoices / **Enid** ![](../assets/img/thumbs/ace_document-type.png)"
    1. Switch to the **Data Element Profiles** tab.
    2. Click on the **Sales Tax** Data Field and click the **+** button in the toolbar.

![](../assets/img/vol-2/4-11/034.png)

![](../assets/img/vol-2/4-11/035.png)

![](../assets/img/vol-2/4-11/036.png)

![](../assets/img/vol-2/4-11/037.png)

!!! abstract "Content Models / Invoices / **Enid** ![](../assets/img/thumbs/ace_document-type.png)"
    Change the following property value(s):

    | Property                     | Default Value | New Value              |
    |------------------------------|---------------|------------------------|
    | ESP(tm) Extraction Overrides |               |                        |
    | **Override Extractor**       | `False`       | ==`True`==             |
    | --> **Type**                 | `None`        | ==`Reference`==        |
    | --> **Referenced Extractor** | `-`           | ==`[Enid] Sales Tax`== |

![](../assets/img/vol-2/4-11/039.png)

![](../assets/img/vol-2/4-11/040.png)

## Data Model Adjustments

!!! abstract "Content Models / Invoices / (data model) / **Ship To** ![](../assets/img/thumbs/ace_data-field.png)"
    Change the following property value(s):

    | Property                  | Default Value | New Value     |
    |---------------------------|---------------|---------------|
    | Appearance                |               |               |
    | **Display Width**         | `100`         | ==`110`==     |
    | Behavior                  |               |               |
    | **Multi Line**            | `Disabled`    | ==`Enabled`== |
    | --> **Multi Line Height** | `80`          | ==`45`==      |
    | --> **Word Wrap**         | `False`       | ==`True`==    |

![](../assets/img/vol-2/4-12/002.png)

![](../assets/img/vol-2/4-12/003.png)

![](../assets/img/vol-2/4-12/004.png)

!!! abstract "Content Models / Invoices / (data model) / **Ship To** ![](../assets/img/thumbs/ace_data-field.png)"
    1. Right click on any of the property names and select **Copy Properties --> Selected Properties...**.
    2. In the **Select Properties** window, check the boxes next to the properties to copy:
        - ==[X] Display Width==
        - ==[X] Multi Line==

![](../assets/img/vol-2/4-12/010.png)

![](../assets/img/vol-2/4-12/011.png)

![](../assets/img/vol-2/4-12/012.png)

!!! abstract "Content Models / Invoices / (data model) / **Remit To** ![](../assets/img/thumbs/ace_data-field.png)"
    1. Right click on any of the property names and select **Paste Properties**.

![](../assets/img/vol-2/4-12/013.png)

![](../assets/img/vol-2/4-12/014.png)

![](../assets/img/vol-2/4-12/015.png)

!!! abstract "Content Models / Invoices / **(data model)** ![](../assets/img/thumbs/ace_data-model.png)"
    1. Change the following property value(s):

        | Property                | Default Value | New Value  |
        |-------------------------|---------------|------------|
        | Child Element Options   |               |            |
        | **Show Fields in Grid** | `False`       | ==`True`== |

    2. In the toolbar, press **Test Extraction** to test all fields against a document.

![](../assets/img/vol-2/4-12/016.png)

![](../assets/img/vol-2/4-12/018.png)

![](../assets/img/vol-2/4-12/019.png)
    