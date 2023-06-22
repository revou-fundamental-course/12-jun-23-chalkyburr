document.getElementById('trigger').onclick = convert;

function convert() {
  let explanation = ''
  let answer      = ''
  let input       = document.getElementById('input').value
  let type        = document.getElementById('convert-option').value
  if (input !== '') {
    if (type === 'ftc') {
      answer      = `${((parseFloat(input) - 32) / 1.8).toFixed(2)}°C`
      explanation = `(${input}°F - 32) / 1,8`
    }
    if (type === 'ctf') {
      answer      = `${((parseFloat(input) * 1.8) + 32).toFixed(2)}°F`
      explanation = `(${input}°C x 1,8) / + 32`
    }
    document.getElementById('output').innerHTML       = answer
    document.getElementById('explanation').innerHTML  = explanation
  }
}