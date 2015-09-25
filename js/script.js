var new_element;
var time_created;
var html_body;
var list_elements;
var button;


var list_of_colors = [
    'red',
    'green',
    'blue',
    'yellow',
    'white',
    'purple',
    'teal',
    'pink',
    'gold'
];




function log(message){
      console.log(message);
}

function attach_element(element_name){

        new_element = document.body.appendChild(
            document.createElement(element_name)
        );

};


function create_list_elements(number_of_list_elements){
    
    for(var i=0;i<number_of_list_elements;i++){

        new_element.textContent = random_color();
        new_element.style.backgroundColor = new_element.textContent;
        new_element.addEventListener('contextmenu',function(event){
                
                this.remove();
                event.preventDefault();
                return false;
        },false);
    };
     

};


function random_color(){
        return generate_random_color = list_of_colors[
            Math.floor(
                Math.random()*list_of_colors.length
            )
        ];

};


document.addEventListener('DOMContentLoaded',function(){
        
    
        attach_element('h1');
        attach_element('button');
        new_element.textContent = 'Add More Random Colors';
        new_element.addEventListener('click',function(){
            
            create_list_elements(list_of_colors.length);
        
        });
    
        create_list_elements(list_of_colors.length);

    
    
    
        html_body = document.body;
        attach_element('h1');
        new_element.textContent = Date.now();
        
        create_list_elements(list_of_colors.length);
                    
    
});