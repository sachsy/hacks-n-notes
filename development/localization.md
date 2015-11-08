<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Localization for developers](#localization-for-developers)
  - [Locale](#locale)
    - [Locale Identifiers International Standard](#locale-identifiers-international-standard)
  - [Localization (L10n)](#localization-l10n)
    - [Platforms](#platforms)
    - [Associated Preferences](#associated-preferences)
    - [Pseudo-Localizing Your Product](#pseudo-localizing-your-product)
    - [Management](#management)
      - [Localization Management System](#localization-management-system)
      - [Translation Memory (TM)](#translation-memory-tm)
    - [Language Needs](#language-needs)
    - [(Potentially) Protected Information](#potentially-protected-information)
    - [RTL (Right To Left) languages](#rtl-right-to-left-languages)
    - [BiDi (Bi Directional)](#bidi-bi-directional)
    - [Control Characters](#control-characters)
    - [Format](#format)
    - [Numbers and Dates](#numbers-and-dates)
    - [Form Validation](#form-validation)
    - [Icons and colors](#icons-and-colors)
    - [Sorting](#sorting)
    - [Adapting User Interface](#adapting-user-interface)
    - [Choosing a translator service](#choosing-a-translator-service)
  - [Internationalization (l18n)](#internationalization-l18n)
    - [Media](#media)
  - [Code](#code)
    - [Converting to Unicode](#converting-to-unicode)
      - [Unicode](#unicode)
        - [Unicode Normalization](#unicode-normalization)
    - [Pluralization](#pluralization)
  - [Quality Assurance](#quality-assurance)
    - [Qualifications for a Language Tester](#qualifications-for-a-language-tester)
  - [Notes](#notes)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Localization for developers

## Locale

A group of target users described by location, language, and preferences.

### Locale Identifiers International Standard

Composed of two values concatenated: 
The ISO 639.1 / 639.2 (Language. lowerCase) + ISO 3166 ( Region. UpperCase)
eg. 
- en_US
- en_CA
- fr_CA

## Localization (L10n)

The process of tailoring a product for a specific locale.

- translation
- unit conversion (metric vs imperial)
- Currency
- time zones
- social conventions (eg. driving a car on the right side of the road)
- legal regulation (eg. cookies warning in Europe)

### Platforms 

- [Shuttle](http://useshuttle.com/) from Square.com
- [Gettext](http://www.gnu.org/software/gettext/) Open sourced by GNU.org
- [One Sky](http://www.oneskyapp.com/)
- [Transifex](https://www.transifex.com/) this one allows translators to translate on the UI, so the context is more clear.

### Associated Preferences

- Time format
- Date format
- Number format
- Currency
- Keyboard layout
- Printer Paper Sizes
- Writing Standard (type of characters, etc)
 
### Pseudo-Localizing Your Product
- Create a test locale to test your i18n efforts eg. en-US
- Verify text fields are encoded properly
- Verify that the correct media is loading
- Check that all settings are loaded from an external source.

### Management

#### Localization Management System

Gather all contents of your app that needs translating into one location. 

#### Translation Memory (TM)

A system that keeps track of how a term, phrase, or sentence has been translated previously, allowing for re-use of already translated values and increased consistency of a translation.

Machine Translator (MT) - eg. Google translate.

### Language Needs

- What letters/characters does the language use?
- What special symbols, like currency, are used?
- What direction is the language written in?
 
### (Potentially) Protected Information

- Name
- Address
- Birthday
- Personally Identifiable Information (PII)
- Gender
- Ethnic heritage
- Opinions
- Political affiliation

[Law reference](http://uk.practicallaw.com)

eg. COPPA (Children's Online Privacy Protection Act)

### RTL (Right To Left) languages

The layout should be mirrored. Everything aligned to the right.

### BiDi (Bi Directional) 

Combines RTL and LTR

Unicode knows how to order the chars for LTR and RTL but there are some chars that are BiDi and need algorithm to know how to display them.

You can tell unicode how to display it using the property `<span dir="ltr'>123 Easy St.</span>`

### Control Characters

Otherwise you can signal it with a special unicode to set the direction. eg. `[U+202a] 123 Easy St. [U+202c]`

Characters | Direction | Effect
---------- | --------- | ------
Most Alphabets | LTR | Strong
Hebrew and Arabic | RTL | Strong
European Numbers | None | Weak

Unicode | Function | Purpose
------- | -------- | -------
U+202a  | LTR Embed | Specifies direction for weak characters
U+202b  | RTL Embed | Specifies direction for weak characters
U+202c  | Pop | Reverts last embed/override
U+202d  | LTR Override | Specifies direction for all characters
U+202e  | RTL Override | Specifies direction for all characters

[Good talk about BiDi](https://www.youtube.com/watch?v=wOEzYefrqo4)

### Format

Different interrogation, exclamation, quotation, symbols, commas, etc.
Even different bold, italics etc for each language. 

### Numbers and Dates
- 01/05/15  month, day, year in America
- 1,000 vs 1.000 

### Form Validation

- Family names are often expected to come first.
- Label input boxes wherever you can.
- Address formats are also considerably different.
- Help your users avoid errors and re-submissions.

### Icons and colors

- Icons may be meaningless in other countries.
- Colors have different connotations depending on the country. eg. red is a popular color for brides in China
- Flags to represent the language can be politically offending. (eg. english flag to represent the languages)
- Be extremely cautious with any images or icons that display any part of the human body. (eg. thumbs up, etc.. ) may be offending.
- Animals symbolize different things.. eg. Cow is holy in India.


### Sorting

If you need to sort entries in a foreign language, you need to make sure that the sorting happens according to the standards of that locale.

Sorting accented characters is tricky. 

Use Localized Sorting.

### Adapting User Interface

- UI should support for at least a 30% expansion in length. 50-60% is safer.
- Check your icons, especially arrow direction.
- Shortcut keys it is recommended to leave them in English (eg. Ctrl+S for Save)

### Choosing a translator service

[Read this guide before hiring a translator](http://atanet.org/publications/Getting_it_right.pdf)

[Guide on translation standards](http://atanet.org/docs/translation_buying_guide.pdf)

[Translation services](http://www.proz.com/)

### Javascript libraries

[FormatJS](http://formatjs.io/) with support for ReactJS

## Internationalization (l18n)

Preparing a product to support multiple languages and settings.

### Media

- Consider what images mean to the culture of your users.
- Consider the direction of reading also for the images since that's how their eyes will flow on the browser.
- Avoid baked-in text in the image.
- Save your original/master PSD/AI files so you can re-edit the images later.

## Code

- Separate code from content
- Detect regions and language settings
- prepare product to display content of different length / format
- Use string interpolation instead of concatenation. (eg. `var log = "The user $user logged in on $time"`

### Converting to Unicode

ASCII supports 128 characters

#### Unicode 

- Covers all modern languages.
- supports over 110,000 characters including asian chars and emoji.

Remember that there is no font that covers all the unicode characters.
[Unicode compatible fonts](https://www.google.com/get/noto/)

##### Unicode Normalization

Standardizing character encoding so all characters and their accompanying marks are composed (combined) or decomposed (separated).

[Unicode reference](http://www.unicode.org/reports/tr15/)

### Pluralization

[Plurals are different in many languages.](http://unicode.org/repos/cldr-tmp/trunk/diff/supplemental/language_plural_rules.html) 

## Quality Assurance
 
- Uses modified placeholder values
- Can test for string replacement
- Can test for interface responsiveness
- Can test for character encoding support [lorem ipsum](http://generator.lorem-ipsum.info)
- Can test that associated settings load properly
- localized strings and media files display correctly
- the interface doesn't have content run-over
- the language itself is correct and appropriate
- the locale-specific settings are behaving properly
- the product itself isn't going to be misinterpreted.

### Qualifications for a Language Tester

- Someone who is native speaker of that language
- Someone who has extensive experience using computers in their native language
- Someone who has experience with similar products

[Language Switcher OSX app](http://www.tj-hd.co.uk/en-gb/languageswitcher/) lets you open any app in the language that you want.

## Notes

L10n or l18n  follow an abbreviation standard in which the number represents the amount of letters between the first and last letter of that word.

## Reference 

[Lynda.com - Localization for Developers](http://www.lynda.com/Developer-tutorials/Localization-Developers/193806-2.html)
