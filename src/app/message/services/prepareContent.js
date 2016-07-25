angular.module('proton.message')
.factory('prepareContent', function(transformLinks, transformImages, transformBlockquotes) {
    return function(content) {
        const div = document.createElement('div');
        const transformers = [transformLinks, transformImages, transformBlockquotes];

        div.innerHTML = content;

        const output =  transformers.reduceRight((html, transformer) => transformer(html), div);

        return output.innerHTML;
    };
});