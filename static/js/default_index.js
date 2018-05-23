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

    // Enumerates an array.
    var enumerate = function(v) { var k=0; return v.map(function(e) {e._idx = k++;});};

    function get_memos_url(start_idx, end_idx) {
      var pp = {
        start_idx: start_idx,
        end_idx: end_idx
      };
      return memos_url + "?" + $.param(pp);
    }

    self.get_memos = function () {
        $.getJSON(get_memos_url(0, 10), function (data) {
            self.vue.checklists = data.checklists;
            self.vue.public_checklists=data.public_checklists;
            self.vue.auth_email = data.auth_email;
            self.vue.has_more = data.has_more;
            self.vue.pub_has_more=data.pub_has_more;
            self.vue.logged_in = data.logged_in;
            enumerate(self.vue.checklists);
            enumerate(self.vue.public_checklists);
        })
    };

    self.get_more = function () {
        var num_checklists = self.vue.checklists.length;
        $.getJSON(get_memos_url(num_checklists, num_checklists + 10), function (data) {
            self.vue.has_more = data.has_more;
            self.extend(self.vue.checklists, data.checklists);
        });
    };

    self.get_more_public = function () {
        var num_checklists = self.vue.public_checklists.length;
        $.getJSON(get_memos_url(num_checklists, num_checklists + 10), function (data) {
            self.vue.pub_has_more = data.pub_has_more;
            self.extend(self.vue.public_checklists, data.public_checklists);
        });
    };

    self.add_memo_button = function () {
        // The button to add a track has been pressed.
        self.vue.is_adding_memo = !self.vue.is_adding_memo;
    };

    self.add_memo = function () {
        // The submit button to add a track has been added.
        $.post(add_memo_url,
            {
                title: self.vue.form_title,
                body: self.vue.form_body,
            },
            function (data) {
                $.web2py.enableElement($("#add_memo_submit"));
                self.vue.checklists.unshift(data.checklist);
                enumerate(self.vue.checklists);
            });
    };

    self.delete_memo = function(memo_idx) {
        $.post(del_memo_url,
            { memo_id: self.vue.checklists[memo_idx].id },
            function () {
                self.vue.checklists.splice(memo_idx, 1);
                enumerate(self.vue.checklists);
            }
        )
    };

    self.toggle_visibility = function(memo_idx) {
        var memo = self.vue.checklists[memo_idx];
        memo.is_public = !memo.is_public;
        $.post(toggle_visibility_url,
            { memo_id: memo.id },
            function () {
            }
        )
    };

    self.edit_memo = function (memo_idx) {
      var memo = self.vue.checklists[memo_idx];
      memo.is_being_edited = !memo.is_being_edited;
      // The submit button to add a track has been added.
      $.post(edit_memo_url,
          {
              memo_id: memo.id,
              title: self.vue.edit_title,
              body: self.vue.edit_body
          },
          function () {
          });
          memo.title= self.vue.edit_title;
          memo.memo= self.vue.edit_body;
  };

    self.edit_memo_button = function (memo_idx) {
        // The button to add a track has been pressed.
        var memo = self.vue.checklists[memo_idx];
        memo.is_being_edited = !memo.is_being_edited;
        self.vue.edit_title= memo.title;
        self.vue.edit_body= memo.memo;
    };

    // Complete as needed.
    self.vue = new Vue({
        el: "#vue-div",
        delimiters: ['${', '}'],
        unsafeDelimiters: ['!{', '}'],
        data: {
            is_adding_memo: false,
            auth_email: null,
            checklists: [],
            public_checklists: [],
            logged_in: false,
            form_title: null,
            form_body: null,
            edit_title: null,
            edit_body: null,
            has_more: false,
            pub_has_more: false,
        },
        methods: {
            get_more: self.get_more,
            get_more_public: self.get_more_public,
            add_memo_button: self.add_memo_button,
            add_memo: self.add_memo,
            delete_memo: self.delete_memo,
            toggle_visibility: self.toggle_visibility,
            edit_memo: self.edit_memo,
            edit_memo_button: self.edit_memo_button
        }
    });

    self.get_memos();
    $("#vue-div").show();

    return self;
};

var APP = null;

// This will make everything accessible from the js console;
// for instance, self.x above would be accessible as APP.x
jQuery(function(){APP = app();});
