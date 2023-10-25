const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')


// focus on teaxtarea
textarea.focus()

// when you press down and let go fires event
textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    // check to see if enter is pressed
    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = 0
        }, 10)
        randomSelect()
    }
})

// create multiple tags-choices using split
function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

    // clear tags elemnt
    tagsEl.innerHTML = ''
    // loop thorugh tag and display innertext
    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}

// random selector
function randomSelect() {
    // number of times highlights before end
    const times = 30
    // every 100ms pick a random tag
    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
        // highlight tag
        highlightTag(randomTag)
        // wait 100ms to unhighlight tag
        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
    }, 100);
    // stop interval
    setTimeout(() => {
        clearInterval(interval)
        // pick random tag to stop highlighted on
        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        })
    }, times * 100)
}

// pick a random tag
function pickRandomTag() {
    // get all tags
    const tags = document.querySelectorAll('.tag')
    // get a random tag
    return tags [Math.floor(Math.random() * tags.length)]
}

// highlight tag
function highlightTag(tag) {
    tag.classList.add('highlight')
}

// unhighlight tag
function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}
