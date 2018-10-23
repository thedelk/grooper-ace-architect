# Condition

## OCR

!!! abstract "Global Resources / OCR Profiles"
    1. Right click and select **Add > OCR Profile...**.
    2. Name it ==Invoices OCR==.

![](img/2-1/002.png)

![](img/2-1/004.png)

!!! abstract "Global Resources / OCR Profiles / **Invoices OCR** "
    Change the following property values:

| Section/Property                   | Default Value | New Value         |
|------------------------------------|---------------|-------------------|
| General                            |               |                   |
| **IP Profile**                     | -             | ==`OCR Cleanup`== |
| **Bound Region Processing**        | `Disabled`    | ==`Enabled`==     |
| Synthesis Options                  |               |                   |
| **Segment End Ratio**              | `100%`        | ==`125%`==        |
| **Segment Reprocessing Threshold** | `0%`          | ==`90%`==         |
| Iterative Processing               |               |                   |
| **OCR Iterations**                 | `1`           | ==`2`==           |
| **Enable Cell Validation**         | `False`       | ==`True`==        |
| **Rows**                           | -             | ==`1`==           |
| **Columns**                        | -             | ==`4`==           |
| **Skip First Column**              | -             | ==`True`==        |
| Results Filtering                  |               |                   |
| **Minimum Character Confidence**   | `0%`          | ==`20%`==         |
| **Eliminate Isolated Symbols**     | `False`       | ==`True`==        |
| Document Structure                 |               |                   |
| **Orientation**                    | `Auto`        | ==`None`==        |
| **Perform Sectioning**             | `False`       | ==`True`==        |
| Processing Options                 |               |                   |
| **Reject Questionable Lines**      | `False`       | ==`True`==        |
| **Reject Questionable Characters** | `False`       | ==`True`==        |

![](img/2-1/036.png)

!!! abstract "Step "
    1. Click on the **OCR Testing** tab.
    2. Select the **Invoices** batch.
    3. Right click on the root batch folder and select **Contents > Apply Activity...**.
    4. In the **Contents • Apply Activity** window, set the **Activity Type** property to ==OCR==.
    5. Expand the **Activity** property.
    6. Set the **Activity > OCR Profile** property to the ==Invoices OCR== profile.
    7. Click **Execute**.
    8. Click **Start**.
    9. Click **Close** when the activity has completed.

![](img/2-1/037.png)

![](img/2-1/051.png)

![](img/2-1/056.png)

![](img/2-1/061.png)

![](img/2-1/064.png)
