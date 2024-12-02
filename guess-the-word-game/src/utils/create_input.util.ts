export default function createInput(shouldBe: string): HTMLInputElement {
  const input = document.createElement('input')
  input.setAttribute('type', 'text')
  input.setAttribute('maxlength', '1')
  input.dataset.letter = shouldBe
  input.classList.add('bg-transparent', 'border-2', 'rounded-lg', 'h-[45px]', 'w-[45px]', 'focus:outline-none', 'focus:border-purpleUI', 'focus:shadow-none', 'focus:ring-offset-0', 'focus:ring-0', 'text-center', 'text-smoke')
  input.addEventListener('input', evalLetter)
  return input
}

const evalLetter = (e: Event): void => {
  const input = e.target as HTMLInputElement
  const letter = input.value
  if (letter !== '' && letter !== input.dataset.letter) {
    const tries = document.getElementById('tries') as HTMLParagraphElement
    tries.dataset.tries = String(Number(tries.dataset.tries) + 1)
    tries.innerHTML = `Tries (${tries.dataset.tries}/5)`

    const failed = document.querySelector<HTMLSpanElement>(`.failed[data-fail="${tries.dataset.tries}"]`)
    failed?.classList.replace('bg-gray', 'bg-purpleUI')

    const mistakes = document.getElementById('mistakes') as HTMLElement
    mistakes.insertAdjacentHTML('beforeend', `<span class="text-vapor">${Number(tries.dataset.tries) !== 5 ? letter + ', ' : letter}</span>`)
    return
  }

  console.log('Match')
}
