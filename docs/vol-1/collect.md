# Collect

## Data Field

!!! abstract "Content Models / Invoices / **(data model)**"
    1. Right click and select **Add > Data Field...**.
    2. Name it ==Invoice Number==.

![](../assets/img/vol-1/4-1/001.png)

![](../assets/img/vol-1/4-1/003.png)

## Extractors

### Creating the invoice number extractor

!!! abstract "Content Models / Invoices / **(local resources)**"
    1. Right click and select **Add > Data Type...**.
    2. Name it ==Invoice Number==.

![](../assets/img/vol-1/4-1/004.png)

![](../assets/img/vol-1/4-1/006.png)

!!! abstract "Content Models / Invoices / (local resources) / **Invoice Number**"
    1. Right click and select **Add > Data Format...**.
    2. Name it ==Acme/Standard/Express==.

![](../assets/img/vol-1/4-1/007.png)

![](../assets/img/vol-1/4-1/009.png)

!!! abstract "Content Models / Invoices / (local resources) / Invoice Number / **Acme/Standard/Express**"
    1. Select **Acme (1)**.
    2. Edit the pattern(s):

        ```tab="Value Pattern"
        invoice\snumber\s?:?\s(\d{8,10})
        ```

        ```tab="Output Format"
        {1}
        ```

![](../assets/img/vol-1/4-1/012.png)

!!! abstract "Content Models / Invoices / (local resources) / **Invoice Number**"
    1. Right click and select **Contents > Add Multiple Items...**.
    2. In the **Contents • Add Multiple Items** window, set **Item Type** to ==Data Format==.
    3. Edit the **Item Names** property and type out the names of the other formats:
        - ==Spartan==
        - ==Enid==
    4. Press **Execute**.

![](../assets/img/vol-1/4-1/013.png)

![](../assets/img/vol-1/4-1/014.png)

!!! abstract "Content Models / Invoices / (local resources) / Invoice Number / **Spartan**"
    1. Select **Spartan (4)**.
    2. Edit the pattern(s):

        ```tab="Value Pattern"
        \w{2}\d{2}-\d{6}
        ```

        ```tab="Look Behind"
        \r\n
        ```

![](../assets/img/vol-1/4-1/020.png)

!!! abstract "Content Models / Invoices / (local resources) / Invoice Number / **Enid**"
    1. Select **Enid (5)**.
    2. Edit the pattern(s):

        ```tab="Value Pattern"
        (\w{3})/(\d{8})
        ```

        ```tab="Output Format"
        {1} {2}
        ```

![](../assets/img/vol-1/4-1/022-2.png)

### Linking the extractor to the field

!!! abstract "Content Models / Invoices / (data model) / **Invoice Number**"
    1. In the General section, expand the **Value Extractor** property.
    2. Set the **Value Extractor > Type** property to ==Reference==.
    3. Set the **Value Extractor > Referenced Extractor** property to the **Invoices > ==Invoice Number==** Data Type.
    4. In the Behavior section, set the **Required** property to ==True==.

![](../assets/img/vol-1/4-1/030.png)

![](../assets/img/vol-1/4-1/033.png)

![](../assets/img/vol-1/4-1/042.png)

## Extraction & Data Review

### Adding Extract and Data Review steps

!!! abstract "Batch Processing / Processes / Working / **Invoices Process**"
    1. Add a new step.
    2. Set the **Activity Type** property of the new step to ==Extract==.

![](../assets/img/vol-1/4-2/001.png)

![](../assets/img/vol-1/4-2/002.png)

!!! abstract "Batch Processing / Processes / Working / **Invoices Process**"
    1. Add a new step.
    2. Set the **Activity Type** property of the new step to ==Data Review==.
    3. **Save** and **Publish**.

![](../assets/img/vol-1/4-2/003.png)

### Updating the production batch

!!! abstract "Batch Processing / Batches / Production / **Invoices Process**"
    1. Right click on batch and select **Update Process...**.
    2. Set **Target Step** to ==Extract==.
    3. Press **Execute**.

![](../assets/img/vol-1/4-2/005.png)

![](../assets/img/vol-1/4-2/006.png)

!!! abstract "Batch Processing / Batches / Production / **Invoices Process**"
    1. Resume the batch.
    2. Press **Process**.

![](../assets/img/vol-1/4-2/008.png)

![](../assets/img/vol-1/4-2/010.png)

### Reviewing extraction results

!!! abstract "Batch Processing / Batches / Production / **Invoices Process**"
    1. After the Extract step has completed, press **Process** to start the Data Review step.
    2. In Grooper Data Review, press ++ctrl+i++ on your keyboard.

![](../assets/img/vol-1/4-2/011.png)

!!! abstract "Batch Processing / Batches / Production / **Invoices Process**"
    1. Fix the issue with the field.
    2. Use ++ctrl+i++ to jump to the next document with an issue.
    3. Repeat until all documents are valid.
    4. Press **Complete Task**.

![](../assets/img/vol-1/4-2/018.png)

![](../assets/img/vol-1/4-2/020.png)

![](../assets/img/vol-1/4-2/024.png)

![](../assets/img/vol-1/4-2/027.png)

![](../assets/img/vol-1/4-2/028.png)