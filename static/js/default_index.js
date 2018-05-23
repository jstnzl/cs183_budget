// This is the js for the default/index.html view.

var app = function() {

    var self = {};

    Vue.config.silent = false; // show all warnings

    // Extends an array
    self.extend = function(a, b) {
        for (var i = 0; i < b.length; i++) {
            a.push(b[i]);
        }
    };

    self.counter = 0;

    function get_checklists_url(start_idx, end_idx) {
        var pp = {
            start_idx: start_idx,
            end_idx: end_idx
        };
        return checklists_url + "?" + $.param(pp);
    }

    self.get_checklists = function () {
        $.getJSON(get_checklists_url(0, 10), function (data) {
            self.vue.checklists = data.checklists;
            self.vue.has_more = data.has_more;
            self.vue.logged_in = data.logged_in;
            self.vue.auth_user = data.auth_user;
        })
    };


    self.get_more = function () {
        var num_checklists = self.vue.checklists.length;
        $.getJSON(get_checklists_url(num_checklists, num_checklists + 50), function (data) {
            self.vue.has_more = data.has_more;
            self.extend(self.vue.checklists, data.checklists);
        });
    };

    self.toggle_public = function (checklist_id) {
        $.post(toggle_checklist_url,
            {
                checklist_id: checklist_id
            },
            function () {
                for (var i = 0; i < self.vue.checklists.length; i++) {
                    if (self.vue.checklists[i].id === checklist_id) {
                        self.vue.checklists[i].is_public = !self.vue.checklists[i].is_public;
                        break;
                    }
                }
            }
        )
    };

    self.toggle_public_button = function() {
        self.vue.is_public = !self.vue.is_public;
    }

    self.add_checklist_button = function () {
        self.vue.form_title = null;
        self.vue.form_memo = null;
        self.vue.is_adding_checklist = !self.vue.is_adding_checklist;
    };


    self.add_checklist = function () {
        $.post(add_checklist_url,
            {
                title: self.vue.form_title,
                memo: self.vue.form_memo,
            },
            function (data) {
                $.web2py.enableElement($("#add_checklist_submit"));
                self.vue.checklists.unshift(data.checklist);
            });
    };

    self.edit_checklist_button = function(checklist_id) {
        if(self.vue.is_editting_checklist == -1) {
            self.vue.is_editting_checklist = checklist_id
        }
        else if(self.vue.is_editting_checklist > -1) {
            self.vue.is_editting_checklist = -1;
            get_checklists();
       }
    }

    self.edit_button = function() {
        self.vue.edit_title = null;
        self.vue.edit_memo = null;
        self.vue.is_editting_checklist = !self.vue.is_editting_checklist;
    }

    self.edit_checklist = function(checklist_id) {
        $.post(edit_checklist_url,
            {
                checklist_id: checklist_id,
                edit_title: self.vue.edit_title,
                edit_memo: self.vue.edit_memo
            },
            function () {
                for (var i = 0; i < self.vue.checklists.length; i++) {
                    if (self.vue.checklists[i].id === checklist_id) {
                        self.vue.checklists[i].title = self.vue.edit_title;
                        self.vue.checklists[i].memo = self.vue.edit_memo;
                        break;
                    }
                }
            });
    };


    self.parse_data = function (file){
        var csv = file;
        lines = csv.split(',');
        console.log("lines: " + lines);
    }

    self.delete_checklist = function (checklist_id) {
        $.post(del_checklist_url,
            {
                checklist_id: checklist_id
            },
            function () {
                var idx = null;
                for (var i = 0; i < self.vue.checklists.length; i++) {
                    if (self.vue.checklists[i].id === checklist_id) {
                        idx = i + 1;
                        break;
                    }
                }
                if (idx) {
                    self.vue.checklists.splice(idx - 1, 1);
                }
            }
        )
    };

    // Complete as needed.
    self.vue = new Vue({
        el: "#vue-div",
        delimiters: ['${', '}'],
        unsafeDelimiters: ['!{', '}'],
        data: {
            checklists: [],
            is_adding_checklist: false,
            is_editting_checklist: -1,
            logged_in: false,
            has_more: false,
            form_title: null,
            form_memo: null,
            edit_title: null,
            edit_memo: null,
            auth_user: null,

        },
        methods: {
            get_more: self.get_more,
            add_checklist_button: self.add_checklist_button,
            edit_checklist_button: self.edit_checklist_button,
            edit_button: self.edit_button,
            edit_checklist: self.edit_checklist,
            add_checklist: self.add_checklist,
            delete_checklist: self.delete_checklist,
            toggle_public: self.toggle_public,
            toggle_public_button: self.toggle_public_button

        }
    });

    self.get_checklists();
    $("#vue-div").show();

    return self;
};

var APP = null;

// This will make everything accessible from the js console;
// for instance, self.x above would be accessible as APP.x
jQuery(function(){APP = app();});
