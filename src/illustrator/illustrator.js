const ChordDrawer = require.main.require('./illustrator/chord/drawer/chord.drawer');

class Illustrator {
    static chord(element, options) {
        const chord = new ChordDrawer(element, options);
        return chord.drawChord();
    };

    tooltipChord (element, options) {
        const id = element + '_chord';

        element = document.getElementById(element);

        const div = document.createElement('div');
        div.setAttribute('id', id);
        element.appendChild(div);

        const chord = new ChordDrawer(id, options);
        chord.drawChord();

        div.style.width=chord.svgWidth + 'px';
        div.style.height=chord.svgHeigth + 'px';

        div.style.background='white';
        div.style.border='1px solid black';
        div.style.borderRadius='4px';
        div.style.padding='10px';
        div.style.display='none';

        element.onmouseover = function(event) {
            div.style.display='block';
        };

        element.onmouseout = function(event) {
            div.style.display='none';
        };
    }
}

module.exports = Illustrator;