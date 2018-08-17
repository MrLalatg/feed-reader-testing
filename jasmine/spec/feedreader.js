$(function() {

    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it("has URL", function(){
            allFeeds.forEach(function(e){
                expect(e.url).toBeDefined();
                expect(e.url.length).not.toBe(0);
            });
        });

        it("has Name", function(){
            allFeeds.forEach(function(e){
                expect(e.name).toBeDefined();
                expect(e.name.length).not.toBe(0);
            });
        });

    });

    describe("The menu", function(){
        it("Hidden by default", function(){
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });

        it("Toggles visibility", function(){
           $('.menu-icon-link').trigger("click");
           expect($("body").hasClass("menu-hidden")).toBe(false);
           $('.menu-icon-link').trigger("click");
           expect($("body").hasClass("menu-hidden")).toBe(true);
        });
    });

    describe("Initial Entries", function(){
        beforeEach(function(done){
            loadFeed(0, function(){
                done();
            });
        });

        it("Had entries", function(done){
            expect($(".feed").find(".entry").length).not.toBe(0);
            done();
        });
    });
    
    describe("New Feed Selection", function(){
        let before;
        beforeEach(function(done){
            before = $(".feed").html();
            loadFeed(0, function(){
                loadFeed(1, done);
            });
        });

        it("Changes after select", function(done){
            expect($(".feed").html()).not.toBe(before);
            done();
        });
    }); 
}());
