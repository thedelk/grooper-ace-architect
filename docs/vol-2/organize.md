# Organize

## Separation

### Creating a Separation Profile

!!! abstract "Global Resources / **Separation Profiles**"
    1. Right click and select **Add > Separation Profile...**.
    2. Name it ==Change in Value (Invoice Number)==.

![](img/3-1/009.png)

### Configuring "Change in Value" separation

!!! abstract "Global Resources / Separation Profiles / **Change in Value (Invoice Number)**"
    Change the following property values:
    
    | Property                         | Default Value | New Value                        |
    |----------------------------------|---------------|----------------------------------|
    | General                          |               |                                  |
    | **Provider**                     | `-`           | ==`Change in Value Separation`== |
    | --> **Value Extractor**          |               |                                  |
    | --> --> **Type**                 | `None`        | ==`Reference`==                  |
    | --> --> **Referenced Extractor** | `-`           | ==`Invoice Number`==             |

![](img/3-1/020.png)

### Testing the Separation Profile

!!! abstract "Global Resources / Separation Profiles / **Change in Value (Invoice Number)**"
    1. Switch to the **Testing** tab.
    2. Press **Separate Batch**.

![](img/3-1/022.png)

### Correcting issues

!!! abstract "Global Resources / Separation Profiles / **Change in Value (Invoice Number)**"
    1. Select **Page 38**.
    2. Right click and select **Add Selection to New Folder**.

![](img/3-1/025.png)

## Classification

### Setting up the Content Model

!!! abstract "**Content Models**"
    1. Right click and select **Add > Content Model...**.
    2. Name it ==Invoices==.

![](img/3-2/002.png)

![](img/3-2/004.png)

### Creating the Data Model and Local Resources folder

!!! abstract "Content Models / **Invoices**"
    1. Right click and select **Create Data Model**.
    2. Right click and select **Create Local Resources Folder**.

![](img/3-2/006.png)

![](img/3-2/007.png)

### Adding Document Types

!!! abstract "Content Models / **Invoices**"
    1. Right click and select **Contents > Add Multiple Items...**.
    2. In the **Contents • Add Multiple Items** window, change the following property values:

        | Property          | Default Value      | New Value                                                                    |
        |-------------------|--------------------|------------------------------------------------------------------------------|
        | General           |                    |                                                                              |
        | **Item Type**     | `Content Category` | ==`Document Type`==                                                          |
        | **Item Names**    | `-`                | ==`Acme`==<br>==`Enid`==<br>==`Express`==<br>==`Spartan`==<br>==`Standard`== |

    3. Press **Execute**.

![](img/3-2/008.png)

![](img/3-2/013.png)

![](img/3-2/015.png)

### Setting the Classification Method

!!! abstract "Content Models / **Invoices**"
    Change the following property values:

    | Property                         | Default Value | New Value             |
    |----------------------------------|---------------|-----------------------|
    | General                          |               |                       |
    | **Classification Method**        | `(None)`      | ==`Lexical`==         |
    | --> **Text Feature Extractor**   |               |                       |
    | --> --> **Type**                 | `None`        | ==`Reference`==       |
    | --> --> **Referenced Extractor** | `-`           | ==`Words (Stemmed)`== |

![](img/3-2/017.png)

![](img/3-2/026.png)

### Setting a positive extractor for classification

!!! abstract "Content Models / Invoices / **Acme**"
    Change the following property values:

    | Property               | Default Value     | New Value         |
    |------------------------|-------------------|-------------------|
    | Classification Rules   |                   |                   |
    | **Positive Extractor** |                   |                   |
    | --> **Type**           | `None`            | ==`Internal`==    |
    | --> **Pattern**        | *(Click to edit)* | *(Click to edit)* |

![](img/3-2/028.png)

![](img/3-2/034.png)

!!! abstract "Content Models / Invoices / **Acme**"
    1. Select **Folder (1)**.
    2. Edit the pattern(s):

        ```tab="Value Pattern"
        acme international
        ```

    3. Press **OK**.
    
![](img/3-2/036.png)

!!! abstract "Content Models / Invoices / **\***"
    Repeat the previous two steps for each of the other four vendors, using the following patterns in their respective **Value Pattern** editors:

    ```tab="Enid"
    enid parts
    ```

    ```tab="Express"
    express manufacturing
    ```

    ```tab="Spartan"
    spartan manufacturing
    ```

    ```tab="Standard"
    standard products
    ```

![](img/3-2/38-42.gif)

### Testing classification

!!! abstract "Content Models / **Invoices**"
    1. Switch to the **Classification Testing** tab.
    2. Press **Classify Batch**.
    3. Press **Execute**.

![](img/3-2/043.png)

![](img/3-2/044.png)

![](img/3-2/045.png)

![](img/3-2/046.png)
