# Frontend Development Test

## Getting started
It's as simple as `npm install` and `npm start` :)

## Estimated completion time
6 hours

## Process

In terms of functionality, I think it was quite straight forward; the data needs to flow between the form and the preview. Since the data needs to be accessible by the entire application, I decided to place the data in the state of the root application as well as create functions that would allow the components to update the state with new data. From there I began structuring 2 container components, the Form (HCardEditor) and the Preview (HCardPreview) to receive the state as props.

Starting with the Form, I passed down the current state as well as functions which will handle changing the values of each relevant field in the state, uploading of the Avatar and a submit function. Initially, I iterated over the state props to generate the form fields that would match the state exactly, however this didn’t work with the design which grouped the fields into 2 distinct sections, so I opted for a more manual approach and coded the fields individual as well as incorporating fieldsets. Another option would have been to changed the data structure to match the design, however this would impact the reusability of the data itself.

On to the hCard Preview, where I pass just the state into the component. First thing I did was look up what a hCard was and found that it required certain class names for each piece of data. I then looked at the design, and decided to break these down into rows to facilitate design and then row items for each piece of data. In order to be flexible enough to accommodate both the custom class elements and structure of the design, each row item only provides the child prop with a single wrapper and label HTML. I then proceeded to break down the information on the card of the preview into logical groups for components to make the overall container component easier to reason about and re-organise the groups of information if needed.
