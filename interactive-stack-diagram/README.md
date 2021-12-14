# The Machine Learning Tech Stack

To customize the Tech Stack:

Add company to `<nav class="mlops-nav"></nav>` as:

```
<div class="option" data-color="#FE9B7C" data-attr="company-name">
  <span class="check"></span>
  <!-- optional logo -->
  <div class="logo">
    <img src="assets/logos/ai-infrastructure.svg" alt="sample logo" />
  </div>
  <!-- end optional logo -->
  Company Name
</div>
```

`data-color` is the fill color that will be used, and `data-attr` is the company-name identifier.

Then add the class `paint-company-name` to all relevant `linearGradient` elements. 
This determines which boxes get filled.

To preset active company add `active` to nav option's class list: `<div class="option active" data-color="#FE9B7C" data-attr="company-name">`