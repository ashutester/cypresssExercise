
class HomePage{

    elements ={
        topRatedCoursesTitle: "//h4[.='Top Rated Courses']"
    };

    checkPageHasTopRatedCourses(){
        cy.xpath(this.elements.topRatedCoursesTitle).should('be.visible');
        cy.xpath(this.elements.topRatedCoursesTitle).should('have.text', 'Top Rated Courses');
    }
};
export default new HomePage();