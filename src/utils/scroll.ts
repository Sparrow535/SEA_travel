export function scrollToElementById(targetId: string, behavior: ScrollBehavior = 'smooth') {
  const target = document.getElementById(targetId)

  if (!target) return

  const navbarBar = document.querySelector('.navbar__bar') as HTMLElement | null
  const navbarOffset = navbarBar?.offsetHeight ?? 96
  const extraOffset = 24
  const targetTop = target.getBoundingClientRect().top + window.scrollY - navbarOffset - extraOffset

  window.scrollTo({
    top: Math.max(0, targetTop),
    left: 0,
    behavior,
  })
}
