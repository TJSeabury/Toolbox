/**
 * 
 * @param form 
 * @returns 
 */
export default function wrapLabelsInAsterisks(form: HTMLFormElement): void {
  if (!form || form?.nodeName !== 'FORM') return;
  const labels: HTMLLabelElement[] = Array.from(form.querySelectorAll('label'));
  labels.map(l => {
    l.innerHTML = l.innerHTML.replace('*', '<span class="required">*</span>');
  });
}