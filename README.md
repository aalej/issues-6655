# Repro for issue 6655

## Versions

firebase-tools: v13.0.2<br>
node: v20.10.0

## Steps to reproduce

1. (Optional) Run `node script <X>`(i.e. `node script 20`) to
   generate an `X` number of functions
1. Run `firebase deploy --only functions --project <project_id>`
