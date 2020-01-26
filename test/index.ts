import pipeline from '..'

pipeline('2.25', parseFloat, x => x / 2, x => x.toFixed(2), x => x.substring(1))
