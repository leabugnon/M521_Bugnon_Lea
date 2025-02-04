class Answer {
  #formElement;
  constructor(container) {
    this.#formElement = this.generateInterfaces(container);
  }

  generateInterface(container) {
    const html = `<form class="row" id="row-0" inert>
	<input class="letter" type="text" name="letter-0" id="row-0--0" maxlength="1">
	<input class="letter" type="text" name="letter-1" id="row-0--1" maxlength="1">
	<input class="letter" type="text" name="letter-2" id="row-0--2" maxlength="1">
	<input class="letter" type="text" name="letter-3" id="row-0--3" maxlength="1">
	<input class="letter" type="text" name="letter-4" id="row-0--4" maxlength="1">
	<input type="submit" hidden>
</form>`;
    // const div = container.createElement('div')
    // div.insertAdjacentHTML("afterbegin",html)

    container.innerHTML = html;
    return this;
  }

  generateInterfaces(container) {
    const formulaire = `<form class="row" id="row-0" inert>
	<input class="letter" type="text" name="letter-0" id="row-0--0" maxlength="1">
	<input class="letter" type="text" name="letter-1" id="row-0--1" maxlength="1">
	<input class="letter" type="text" name="letter-2" id="row-0--2" maxlength="1">
	<input class="letter" type="text" name="letter-3" id="row-0--3" maxlength="1">
	<input class="letter" type="text" name="letter-4" id="row-0--4" maxlength="1">
	<input type="submit" hidden>
</form>`;

    container.insertAdjacentHTML("afterbegin", formulaire);
    return this;
  }
}
export default Answer;
