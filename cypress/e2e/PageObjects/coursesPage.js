class coursesPage{

    elements ={
        allCoursesHeader : '.dynamic-heading.margin-bottom-20'
    }

    checkHeader(){
        cy.get(this.elements.allCoursesHeader).should('have.text','All Courses')
    }
}
export default new coursesPage();