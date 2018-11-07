# Acquire

## Importing

### Importing a pre-made batch

!!! abstract "***(root)*** ![](../assets/img/thumbs/ace_root.png)"
    1. Right click and select **Import --> Compressed Archive**.
    2. Set the **Import Path** property to the ==Grooper ACE - Architect - Volume II - Begin.zip== file.
    3. Press **Execute**.

![](../assets/img/vol-2/1-1/002.png)

![](../assets/img/vol-2/1-1/003.png)

![](../assets/img/vol-2/1-1/005.png)

### Creating an empty test batch

!!! abstract "Batch Processing / Batches / **Test** ![](../assets/img/thumbs/ace_folder-batches.png)"
    1. Right click and select **Add --> Batch...**.
    2. Name it ==Invoices==.

![](../assets/img/vol-2/1-1/007.png)

![](../assets/img/vol-2/1-1/009.png)

## Scanning

### Creating a Scanner Profile

!!! abstract "Global Resources / **Scanner Profiles**"
    1. Right click and select **Add --> Scanner Profile...**.
    2. Name it ==Invoices Source Scan==.

![](../assets/img/vol-2/1-1/012.png)

![](../assets/img/vol-2/1-1/014.png)

### Configuring the Scanner Profile

!!! abstract "Global Resources / Scanner Profiles / **Invoices Source Scan**"
    1. Change the following properties:

        | Section/Property        | Default Value     | New Value                |
        |-------------------------|-------------------|--------------------------|
        | General                 |                   |                          |
        | **Selected Device**     | `-`               | ==`File System Import`== |
        | --> **Device Settings** | *(Click to edit)* | *(Click to edit)*        |

    2. In the **File System Import Settings** window, change the following property value(s):

        | Section/Property  | Default Value | New Value       |
        |-------------------|---------------|-----------------|
        | Import Settings   |               |                 |
        | **Import Source** | `FileSystem`  | ==`TestBatch`== |
        | **Source Batch**  | `-`           | ==`_Source`==   |

![](../assets/img/vol-2/1-1/017.png)

![](../assets/img/vol-2/1-1/022.png)

![](../assets/img/vol-2/1-1/025.png)

### Testing the Scanner Profile

!!! abstract "Global Resources / **Scanner Profiles**"
    1. From the **Scanner Profile dropdown** select the ==Invoices Source Scan== profile.
    2. From the **batch dropdown** select the ==Invoices== batch.
    3. Press **Scan**.

![](../assets/img/vol-2/1-1/030.png)

![](../assets/img/vol-2/1-1/032.png)

![](../assets/img/vol-2/1-1/034.png)

![](../assets/img/vol-2/1-1/035.png)