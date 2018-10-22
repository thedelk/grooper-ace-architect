## OCR
---
1. Navigate to (root) > Global Resources > OCR Profiles
2. Right click and select Add > OCR Profile...
3. Name it ==Invoices OCR==

    img/2-1/002

    img/2-1/004
---
1. Set the IP Profile property to the ==OCR Cleanup== profile
2. Set the Bound Region Processing property to ==Enabled==
3. Set the Segment End Ratio property to ==125%==
4. Set the Segment Reprocessing Threshold property to ==90%==
5. Set the OCR Iterations property to ==2==
6. Set the Enable Cell Validation property to ==True==
7. Set the Rows property to ==1==
8. Set the Columns property to ==4==
9. Set the Skip First Column property to ==True==
10. Set the Minimum Character Confidence property to ==20%==
11. Set the Eliminate Isolated Symbols property to ==True==
12. Set the Orientation property to ==None==
13. Set the Perform Sectioning property to ==True==
14. Set the Reject Questionable Lines property to ==True==
15. Set the Reject Questionable Characters property to ==True==

    img/2-1/036
---
1. Click on the OCR Testing tab
2. Select the Invoices batch, if it isn't already selected
3. Right click on the root batch folder and select Contents > Apply Activity...
4. In the Contents • Apply Activity window, set the Activity Type property to ==OCR==
5. Expand the Activity property
6. Set the Activity > OCR Profile property to the ==Invoices OCR== profile
7. Click Execute
8. Click Start
9. Click Close when the activity has completed

    img/2-1/037

    img/2-1/051

    img/2-1/056

    img/2-1/061

    img/2-1/064




















    img/2-1/0