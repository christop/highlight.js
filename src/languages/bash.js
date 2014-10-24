/*
Language: Bash
Author: vah <vahtenberg@gmail.com>
Contributrors: Benjamin Pannell <contact@sierrasoftworks.com>
Category: common
*/

function(hljs) {
  var VAR = {
    className: 'variable',
    variants: [
      {begin: /\$[\w\d#@][\w\d_]*/},
      {begin: /\$\{(.*?)\}/}
    ]
  };
  var QUOTE_STRING = {
    className: 'string',
    begin: /"/, end: /"/,
    contains: [
      hljs.BACKSLASH_ESCAPE,
      VAR,
      {
        className: 'variable',
        begin: /\$\(/, end: /\)/,
        contains: [hljs.BACKSLASH_ESCAPE]
      }
    ]
  };
  var APOS_STRING = {
    className: 'string',
    begin: /'/, end: /'/
  };

  return {
    aliases: ['sh', 'zsh'],
    lexemes: /-?[a-z\.]+/,
    keywords: {
      keyword:
        'if then else elif fi for break continue while in do done exit return set '+
        'declare case esac export exec function',
      literal:
        'true false',
      built_in:
        'printf echo read cd pwd pushd popd dirs let eval unset typeset readonly '+
        'getopts source shopt caller type hash bind help sudo'+
        'a2p a2ps a2ps-lpr-wrapper a2x a52dec aalib-config abc2ly abiword '+
        'aconnect acpi_fakekey acpi_listen acyclic add-apt-repository '+
        'addftinfo addpart addr2line afm2pl afm2tfm afmtodit akonadi2xml '+
        'akonadi_agent_launcher akonadi_agent_server akonadi_control '+
        'akonadictl akonadi_maildispatcher_agent akonadi_rds akonadiserver '+
        'akonaditray al al2 alacarte aleph alien allcm allneeded alsa_in '+
        'alsaloop alsamixer alsa_out alsaplayer alsaucm amidi amixer '+
        'amuFormat.sh animate.im6 annotate-output anytopnm aoss aot-compile '+
        'apg apgbfm aplay aplaymidi apm apmsleep appres apt-cache apt-config '+
        'aptdcon apt-extracttemplates apt-file apt-ftparchive apt-get '+
        'aptitude-create-state-bundle aptitude-curses '+
        'aptitude-run-state-bundle apt-key apt-mark apt-sortpkgs ar arandr '+
        'arch archpath ardour2 ardour2-session_exchange.py arduino '+
        'arduino-add-groups arecordmidi arj arjdisp arj-register arm2hpdl '+
        'arping as asciidoc asciitopgm ascii-xfr aseqdump aseqnet aspell '+
        'aspell-import assistant-qt4 at atktopbm atobm audacity autoconf '+
        'autoheader autom4te automake-1.11 autopoint autoreconf autoscan '+
        'autotrace autoupdate avahi-browse avahi-publish avahi-resolve '+
        'avahi-set-host-name avr-addr2line avr-ar avr-as avr-c++ avr-c++filt '+
        'avr-cpp avrdude avr-g++ avr-gcc avr-gcc-4.7.2 avr-gcc-ar avr-gcc-nm '+
        'avr-gcc-ranlib avr-gcov avr-gprof avr-ld avr-man avr-nm avr-objcopy '+
        'avr-objdump avr-ranlib avr-size avr-strings avr-strip axi-cache '+
        'b2m.emacs23 b43-fwcutter baobab barcode base64 basename bash bashbug '+
        'batch bbox bc bcomps bdftopcf bdftruncate beef beep bibtex8 '+
        'bibtex.original bibtexu bioradtopgm bison bison.yacc bitmap blender '+
        'blenderplayer bluetooth-agent bluetooth-sendto bluetooth-wizard '+
        'bluez-simple-agent bluez-simple-service bluez-test-adapter '+
        'bluez-test-audio bluez-test-device bluez-test-discovery '+
        'bluez-test-input bluez-test-manager bluez-test-network '+
        'bluez-test-serial bluez-test-service bluez-test-telephony bmp2tiff '+
        'bmptopnm bmtoa botti brasero brushtopbm bsd-from bsd-mailx bsd-write '+
        'btcflash bts build-rdeps bunzip2 busybox byobu byobu-config '+
        'byobu-ctrl-a byobu-disable byobu-enable byobu-export byobu-janitor '+
        'byobu-launch byobu-launcher byobu-launcher-install '+
        'byobu-launcher-uninstall byobu-layout byobu-quiet '+
        'byobu-reconnect-sockets byobu-select-backend byobu-select-profile '+
        'byobu-select-session byobu-shell byobu-silent byobu-status '+
        'byobu-status-detail bzcat bzdiff bzexe bzgrep bzip2 bzip2recover '+
        'bzmore c2050 c2ph c89-gcc c99-gcc cabextract caca-config calendar '+
        'calibrate_ppa calligra calligraconverter camorama cancel card caspol '+
        'cat catchsegv catfish catman cb-aerosnap cb-compositor cb-cowpowers '+
        'cb-dropbox-pipemenu cb-exit cb-fortune cb-hotcorners cb-include.cfg '+
        'cb-libreoffice-pipemenu cb-lock cb-places-pipemenu '+
        'cb-printing-pipemenu cb-recent-files-pipemenu '+
        'cb-remote-desktop-pipemenu cb-sshconfig-pipemenu cb-welcome '+
        'cb-x-www-browser-pipemenu ccmakedep ccomps ccrewrite cert2spc certmgr '+
        'c++filt chacl chage chardet chattr chcon chdist checkbashisms '+
        'checkinstall check-regexp chem chfn chgrp chiplotle chkdupexe chkfont '+
        'chktrust chmod chown chromium chrt chsh chvt cifscreds ciptool '+
        'cisco-decrypt cjet cjpeg ckbcomp ckeygen ck-history ck-launch-session '+
        'ck-list-sessions cksum clc-lisp clc-register-user-package clc-slime '+
        'clc-unregister-user-package cleanlinks clear clear_console clipit '+
        'clisp clisp-link clutter-scan-immodules cmake cmp cmuwmtopbm cnee '+
        'codepage col colcrt collateindex.pl colormgr colrm column comm '+
        'command2foo2lava-pjl compare.im6 composeglyphs composite.im6 compton '+
        'compton-trans conch conchftp config_data conjure.im6 conky conkywonky '+
        'convert.im6 convert-ly corelist cowpoke cowsay cp cpack cpan '+
        'cpan2dist cpanp cpanp-run-perl cpio cpp-4.4 cpp-4.6 cpp-4.7 '+
        'cpufreq-aperf cpufreq-info cpufreq-selector cpufreq-set crc32 crontab '+
        'csharp csplit ctags.emacs23 ctangle ctest ctie cu cups-calibrate '+
        'cupstestdsc cupstestppd curl cut cvlc cvs cvs-debi cvs-debrelease '+
        'cvs-debuild cvs-switchroot cvt cweave dadadodo dash date db2html '+
        'dblatex dbus-cleanup-sockets dbus-daemon dbus-launch dbus-monitor '+
        'dbus-send dbus-uuidgen dc dccleancrw dcfujigreen dcfujiturn '+
        'dcfujiturn16 dcmd dcontrol dcparse dcraw dcut dd ddate dd-list '+
        'deallocvt debchange debcheckout debclean debcommit debconf '+
        'debconf-apt-progress debconf-communicate debconf-copydb '+
        'debconf-escape debconf-getlang debconf-get-selections '+
        'debconf-gettextize debconf-loadtemplate debconf-mergetemplate '+
        'debconf-set-selections debconf-show debconf-updatepo debdiff debi '+
        'debpkg debrelease deb-reversion debrsign debsign debsnap debuild '+
        'dehtmldiff delpart dep3changelog designer-qt4 desktop2menu '+
        'desktop-file-install desktop-file-validate detex devdump devnag df '+
        'dfu-programmer dfutool dgawk dget dh dh_auto_build dh_auto_clean '+
        'dh_auto_configure dh_auto_install dh_auto_test '+
        'dh_autotools-dev_restoreconfig dh_autotools-dev_updateconfig '+
        'dh_bugfiles dh_builddeb dh_clean dh_compress dh_desktop dh_dkms '+
        'dh_fixperms dh_gconf dh_gencontrol dh_gstscancodecs dh_gtkmodules '+
        'dh_icons dh_install dh_installcatalogs dh_installchangelogs '+
        'dh_installcron dh_installdeb dh_installdebconf dh_installdocs '+
        'dh_installemacsen dh_installexamples dh_installgsettings '+
        'dh_installifupdown dh_installinfo dh_installinit dh_installlogcheck '+
        'dh_installlogrotate dh_installman dh_installmanpages dh_installmenu '+
        'dh_installmime dh_installmodules dh_installpam dh_installppp '+
        'dh_installtex dh_installudev dh_installwm dh_installxfonts '+
        'dh_installxmlcatalogs dh_link dh_lintian dh_listpackages '+
        'dh_makeshlibs dh_md5sums dh_movefiles dh_nativejava dh_numpy '+
        'dh_pangomodules dh_perl dh_prep dh_pycentral dh_pysupport dh_python '+
        'dh_python2 dh_scrollkeeper dh_shlibdeps dh_strip dh_suidregister '+
        'dh_testdir dh_testroot dh_ucf dh_undocumented dh_usrlocal diff '+
        'diff2patches diff3 diffimg diffindex-download diffindex-rred diffstat '+
        'dig dijkstra dir dircolors directfb-config dirname disco '+
        'discover-config disdvi display.im6 djpeg dmcs dm_date dmenu '+
        'dmenu_path dmenu_run dmesg dm_zdump dnsdomainname docbook2dvi '+
        'docbook2html docbook2man docbook2pdf docbook2ps docbook2rtf '+
        'docbook2tex docbook2texi docbook2txt domainname dot dotlockfile dotty '+
        'double dpkg dpkg-architecture dpkg-buildflags dpkg-buildpackage '+
        'dpkg-checkbuilddeps dpkg-deb dpkg-depcheck dpkg-distaddfile '+
        'dpkg-divert dpkg-genbuilddeps dpkg-genchanges dpkg-gencontrol '+
        'dpkg-gensymbols dpkg-mergechangelogs dpkg-name dpkg-parsechangelog '+
        'dpkg-query dpkg-scanpackages dpkg-shlibdeps dpkg-split '+
        'dpkg-statoverride dpkg-trigger dpkg-vendor dprofpp dput dscextract '+
        'dscverify dt2dv dtd2rng dtd2vim dtd2xsd dtplite du dubdv dumphint '+
        'dumpiso dumpkeys dumpsexp dv2dt dvconnect dvdauthor dvddirdel '+
        'dvd-ram-control dvd+rw-format dvd+rw-mediainfo dvdunauthor dvgrab '+
        'dvi2fax dvi2tty dvibook dviconcat dvicopy dvihp dvilj dvilj2p dvilj4 '+
        'dvilj4l dvipdf dvipdfmx dvipdft dvipos dvips dvired dviselect dvisvgm '+
        'dvitodvi dwm.default dwm.maintainer dwm.web dwm.winkey easy_install '+
        'easy_install-2.6 easy_install-2.7 ebrowse.emacs23 ecasound '+
        'ecryptfs-add-passphrase ecryptfsd ecryptfs-generate-tpm-key '+
        'ecryptfs-insert-wrapped-passphrase-into-keyring ecryptfs-manager '+
        'ecryptfs-migrate-home ecryptfs-mount-private ecryptfs-recover-private '+
        'ecryptfs-rewrap-passphrase ecryptfs-rewrite-file '+
        'ecryptfs-setup-private ecryptfs-setup-swap ecryptfs-stat '+
        'ecryptfs-umount-private ecryptfs-unwrap-passphrase ecryptfs-verify '+
        'ecryptfs-wrap-passphrase ed editdiff edit-patch editres egrep eject '+
        'elfedit elinks emacs23-x emacsclient.emacs23 enc2xs enchant '+
        'enchant-lsmod encodedv env envelope.py envsubst ephy-profile-migrator '+
        'epiphany epiphany-browser eps2eps epsffit eptex eqn eqn2graph '+
        'equivs-build equivs-control erb1.8 erb1.9.1 esc-m esdcompat '+
        'esd-config espdiff espeak etags.emacs23 etf2ly etoys euptex '+
        'eventlogadm evince evince-previewer evince-thumbnailer exifautotran '+
        'exiv2 exmendis exmenen exo-desktop-item-edit exo-open '+
        'exo-preferred-applications expand expiry expr extlinux extract_a52 '+
        'extractres eyuvtoppm f2py f2py2.6 f2py2.7 faad factor faillog '+
        'faked-sysv faked-tcp fakeroot-sysv fakeroot-tcp fallocate false '+
        'fax2ps fax2tiff fbxkb fc-cache fc-cat fc-list fc-match fc-pattern '+
        'fc-query fc-scan fdupes festival festival_client feynmf ffado-debug '+
        'ffmpeg ffplay ffprobe ffserver fgconsole fgrep fiascotopnm fidentify '+
        'fig2dev fig2mpdf fig2ps2tex figlist filan file file-roller filezilla '+
        'filterdiff find find2perl find_hpgl_file_dimensions.py findmnt '+
        'findsmb finger firefox fitstopnm fixcvsdiff fixdlsrps fixfmps fixnt '+
        'fixps fixpsditps fixpspps fix-qdf fixscribeps fixtpps fixwfwps '+
        'fixwpps fixwwps fiz flash-player-properties flex flock fmt fmtutil '+
        'fmtutil-sys fold font2c fontforge fontimage fontinst fontlint '+
        'fontmatrix fonttosfnt foo2hiperc foo2hiperc-wrapper foo2hp '+
        'foo2hp2600-wrapper foo2lava foo2lava-wrapper foo2oak foo2oak-wrapper '+
        'foo2qpdl foo2qpdl-wrapper foo2slx foo2slx-wrapper foo2xqx '+
        'foo2xqx-wrapper foo2zjs foo2zjs-icc2ps foo2zjs-pstops foo2zjs-wrapper '+
        'foomatic-combo-xml foomatic-compiledb foomatic-configure '+
        'foomatic-perl-data foomatic-ppdfile foomatic-ppd-options '+
        'foomatic-ppd-to-xml foomatic-printjob foomatic-rip '+
        'foomatic-searchprinter fortune free fslsfonts fstobdf fstopgm '+
        'fswebcam funzip fuser fusermount fusesmb fusesmb.cache fzputtygen '+
        'fzsftp g3topbm g++-4.4 g++-4.7 gacutil gacutil2 galculator '+
        'gamma4scanimage gatttool gawk gc gcalccmd gcalctool gcc-4.4 gcc-4.6 '+
        'gcc-4.7 gcc-ar-4.7 gccmakedep gcc-nm-4.7 gcc-ranlib-4.7 '+
        'gconf-merge-tree gconftool-2 gcore gcov-4.4 gcov-4.6 gcov-4.7 '+
        'gcr-viewer gdb gdbserver gdbtui gdbus gdbus-codegen gdialog gdiffmk '+
        'gdk-pixbuf-pixdata gdm-control geany gedit gem1.9.1 gemtopnm gencat '+
        'gendiff genisoimage genxs geoiplookup geoiplookup6 geoipupdate getafm '+
        'getbuildlog getcifsacl getconf geteltorito getent getfacl gethostip '+
        'getkeycodes getopt gettext gettextize gettext.sh getweb gftodvi '+
        'gftopk gftp gftp-gtk gftp-text ggtick gif2tiff giftopnm gigolo '+
        'gimp-2.8 gimp-console-2.8 ginstall-info gipddecode git gitk git-shell '+
        'git-upload-pack gjs-console gkbd-keyboard-display gksu '+
        'gksu-properties glib-genmarshal glib-gettextize glib-mkenums glxdemo '+
        'glxgears glxheads glxinfo gmcs gml2gv gmrun gnee gnome-color-chooser '+
        'gnome-contacts gnome-control-center gnome-desktop-item-edit '+
        'gnome-dictionary gnome-doc-prepare gnome-doc-tool gnome-keyring-3 '+
        'gnome-keyring-daemon gnome-open gnome-panel gnome-power-statistics '+
        'gnome-screensaver gnome-screensaver-command gnome-screenshot '+
        'gnome-search-tool gnome-session gnome-session-fallback '+
        'gnome-session-properties gnome-session-quit gnome-sound-recorder '+
        'gnome-system-log gnome-system-log-pkexec gnome-system-monitor '+
        'gnome-web-photo gnome-wm gnuhtml2latex gnumeric gnuplot '+
        'gnupod_addsong gnupod_check gnupod_convert_APE gnupod_convert_FLAC '+
        'gnupod_convert_MIDI gnupod_convert_OGG gnupod_convert_RIFF '+
        'gnupod_INIT gnupod_otgsync gnupod_search gobject-query gocr '+
        'gouldtoppm gparted-pkexec gpasswd gpg gpg-error gpg-error-config '+
        'gpgsplit gpgv gpg-zip gphoto2 gpicview gprof grandr grap2graph graph '+
        'grep grep-changelog.emacs23 grep-dctrl grep-excuses grn grodvi groff '+
        'groffer grog grolbp grolj4 grops grotty groups growisofs grub-bin2h '+
        'grub-editenv grub-fstest grub-kbdcomp grub-menulst2cfg grub-mkfont '+
        'grub-mkimage grub-mklayout grub-mkpasswd-pbkdf2 grub-mkrelpath '+
        'grub-mkrescue grub-mount grub-script-check gs gsbj gsdj gsdj500 '+
        'gsettings gsettings-data-convert gsettings-schema-convert gsftopk '+
        'gsimplecal gslj gslp gsnd gst-codec-info-0.10 gst-feedback '+
        'gst-feedback-0.10 gst-inspect gst-inspect-0.10 gst-launch '+
        'gst-launch-0.10 gstreamer-properties gst-xmlinspect '+
        'gst-xmlinspect-0.10 gst-xmllaunch gst-xmllaunch-0.10 gtester '+
        'gtester-report gtf gtk-builder-convert gtkpod gtrayicon guile-1.8 '+
        'gunzip gvcolor gvfs-cat gvfs-copy gvfs-info gvfs-less gvfs-ls '+
        'gvfs-mime gvfs-mkdir gvfs-monitor-dir gvfs-monitor-file gvfs-mount '+
        'gvfs-move gvfs-open gvfs-rename gvfs-rm gvfs-save gvfs-set-attribute '+
        'gvfs-trash gvfs-tree gvgen gvpack gvpr gworldclock gxditview gxl2gv '+
        'gzexe gzip h2ph h2xs hal-device hal-disable-polling '+
        'hal-find-by-capability hal-find-by-property hal-get-property hal-lock '+
        'hal-set-property hamfax hardening-check hbpldecode hcitool head '+
        'hersheydemo hexdump hg hg-ssh hipstopgm hmac256 hman host hostid '+
        'hostname hp2xx hpftodit hpijs hp-mkuri hsetroot htdb_dump htdb_load '+
        'htdb_stat htdig htdig-pdfparser htdump HtFileType htfuzzy htload '+
        'htmerge html2ps html2text htnotify htop htpurge htstat httpcfg '+
        'iceauth ico icontopbm iconv id id3v2 identify.im6 iecset ifnames '+
        'igawk ijs_pxljr ilasm ilbmtoppm imake img2png img2py img2xpm imgtoppm '+
        'import.im6 includeres indent indxbib info infocmp infokey inifile '+
        'inkscape inkview inotifywait inotifywatch install install-info '+
        'install-menu installvst installwatch instmodsh interdiff invest-chart '+
        'ionice ip ipcmk ipcrm ipcs ipod-time-sync ipptool iproxy irb1.8 '+
        'irb1.9.1 ircII irssi ischroot isdv4-serial-debugger isodump isohybrid '+
        'isohybrid.pl isoinfo isovfy ispell-wrapper isql isql-vt isqlw-vt '+
        'istanbul iusql jack_alias jack_bufsize jack_connect jack_control '+
        'jack_cpu jack_cpu_load jackd jackdbus jack_evmon jack_freewheel '+
        'jack_iodelay jack_latent_client jack_load jack_lsp jack_metro '+
        'jack_midi_dump jack_midi_latency_test jack_midiseq jack_midisine '+
        'jack_monitor_client jack_multiple_metro jack_net_master '+
        'jack_net_slave jack_rec jack_samplerate jack_server_control '+
        'jack_session_notify jack_showtime jack_simple_client '+
        'jack_simple_session_client jack_test jack_thru jack_unload jack_wait '+
        'jack_zombie jhead jitsi join join-dctrl jovie joy2key jpegexiforient '+
        'jpegtopnm jpegtran jpnevulator json_pp json_xs jw '+
        'kaddressbookmigrator kate kbd-config kbdinfo kbd_mode kbuildsycoca4 '+
        'kcmshell4 kcookiejar4 kde4 kde4-config kde4-menu kdebugdialog kde-cp '+
        'kded4 kdeinit4 kdeinit4_shutdown kdeinit4_wrapper kde-mv kdenlive '+
        'kdenlive_render kde-open keyctl kfile4 kglobalaccel khotnewstuff4 '+
        'khotnewstuff-upload kiconfinder kill killall kino kioclient kjs '+
        'kjscmd kmail-migrator kmod kmouth knotify4 koi8rxterm kpseaccess '+
        'kpsestat kpsetool kpsewhere kpsewhich kquitapp kres-migrator krita '+
        'kross kshell4 kstart ksvgtopng ktesnippets_editor ktraderclient '+
        'ktrash kuiserver kwrapper4 kwriteconfig l2ping l2test lacheck lame '+
        'last lastlog lavadecode lc lcf lconvert ld.bfd ldd ld.gold leafpad '+
        'leaftoppm lefty less lesskey lesspipe lexgrog lft.db libfm-pref-apps '+
        'libgcrypt-config libnetcfg libpng12-config libtool libtoolize '+
        'libusb-config licensecheck lilymidi lilypond lilypond-book '+
        'lilypond-invoke-editor lilysong line linguist-qt4 link links lintian '+
        'lintian-info linux-boot-prober linux-version lispmtopgm listres '+
        'list-unreleased live-system live-toram live-update-initramfs '+
        'live-uptime lkbib ln lndir lneato lnstat loadkeys loadunimap lobase '+
        'localc locale localedef lockfile-check lockfile-create '+
        'lockfile-remove lockfile-touch lodraw loffice lofromtemplate logger '+
        'login logname loimpress lomath look lookbib lorder lore lostirc loweb '+
        'lowntfs-3g lowriter lp lpoptions lppasswd lpq lpr lprm lp_solve '+
        'lpstat lrelease-qt4 ls lsattr lsblk lsb_release lscpu lshal lshw '+
        'lsinitramfs lsof lspci lspgpot lss16toppm lsusb lsw ltrace luatex '+
        'luit lupdate-qt4 lwp-download lwp-dump lwp-mirror lwp-request '+
        'lxappearance lxlock lxrandr lxsession lxsession-logout lxterm lynx '+
        'lzmainfo lzmp lzop m17n-db m2300w m2300w-wrapper m2400w m4 macpack '+
        'macptopbm mag mail-lock mailmail mail-touchlock mail-unlock make '+
        'makecert makedepend makeg makeindex makeinfo makejvf make_method '+
        'mako-render man man2html mandb manhole manpage-alert manpath mapscrn '+
        'mass-bug matchbox-remote matchbox-window-manager mawk mbchk mc mcheck '+
        'mcomp mconfig mcookie mc-tool mc-wait-for-name md5pass md5sum '+
        'mdatopbm mdiff meinproc4 meinproc4_simple meld melt memdiskfind '+
        'mencoder mendex mergechanges mergelib mesg metacity metacity-message '+
        'metacity-theme-viewer metacity-window-demo mf mf-nowin mft mgrtopbm '+
        'midi2ly mikmod mimeopen min12xxw minicom miniterm.py mirage mkbimage '+
        'mk-build-deps mkbundle mkdir mkdirhier mkdiskimage mkfifo mkfontdir '+
        'mkfontscale mkhtmlindex mkindex mkmanifest mk_modmap mknod mkocp '+
        'mkofm mkpasswd mksquashfs mktemp mktexlsr mktexmf mktexpk mktextfm '+
        'mktunes mkzftree mlocate mm2gv mmroff mocp moc-qt4 mogrify.im6 mono '+
        'mono-api-check mono-api-info mono-cil-strip mono-configuration-crypto '+
        'monolinker monop monop2 mono-shlib-cop mono-test-install mono-xmltool '+
        'montage.im6 more morse morseALSA morseLinux morseOSS morseX11 mount '+
        'mountpoint mousetweaks mozroots mpeg2desc mpexpand mpg123-alsa '+
        'mpg123.bin mpg123-jack mpg123-nas mpg123-openal mpg123-oss '+
        'mpg123-portaudio mpg321 mplayer1 mpost mscompress msexpand msgattrib '+
        'msgcat msgcmp msgcomm msgconv msgen msgexec msgfilter msgfmt msggrep '+
        'msginit msgmerge msgunfmt msguniq mt-gnu mtools mtr mtrace mtvtoppm '+
        'musicxml2ly mutt_dotlock mutt-org mv mx-create-image-cache mxtar '+
        'my_print_defaults mysql_install_db mysql_upgrade namecheck namei nano '+
        'nautilus nautilus-autorun-software nautilus-connect-server '+
        'nautilus-sendto ncal nc.traditional ncurses5-config ncursesw5-config '+
        'ne neotoppm nepomukbackup nepomukcontroller nepomukindexer '+
        'nepomuk-rcgen nepomukserver nepomukservicestub neqn netkit-ftp '+
        'net.samba3 net-snmp-config netstat network-admin newgrp newsbeuter '+
        'ngettext ngrep nice nisdomainname nitrogen nl nm nmblookup.samba3 '+
        'nmudiff nns nnsd nnslog nodejs node-waf nohup nop notify-send nproc '+
        'nroff nsgmls nslookup nstat nsupdate ntfs-3g ntfs-3g.probe '+
        'ntfs-3g.secaudit ntfs-3g.usermap ntfscat ntfsck ntfscluster ntfscmp '+
        'ntfsdecrypt ntfsdump_logfile ntfsfix ntfsinfo ntfsls ntfsmftalloc '+
        'ntfsmove ntfstruncate ntfswipe ntlm_auth ntpdc ntpq ntpsweep ntptrace '+
        'nvlc oakdecode obapps obconf obex-data-server objcopy objdump obm-dir '+
        'obmenu obm-moz obm-nav obm-xdg obxprop oclock od odbcinst ode '+
        'ods-server odvicopy ogg123 oggdec oggenc ogginfo ogonkify '+
        'oil-bugreport okular oldfind omfonts omshell oneko '+
        'onto2vocabularyclass openbox openbox-gnome-session '+
        'openbox-kde-session openbox-session openjade-1.4devel openssl '+
        'openssl-vulnkey openvt opldecode orc-bugreport orcc original-awk '+
        'os-prober otangle otp2ocp ots outocp owncloud owncloudcmd pacat pacmd '+
        'pactl padsp page pal2rgb palmtopnm pamcut pamdeinterlace pamdice '+
        'pamfile pamoil pamstack pamstretch pamstretch-gen pandoc '+
        'pango-querymodules pango-view paperconf parcellite parsechangelog '+
        'partx passwd paste pasuspender pat2ppm patch patextract patgen '+
        'pathchk pavucontrol pax11publish pbibtex pbmclean pbmlife pbmmake '+
        'pbmmask pbmpage pbmpscale pbmreduce pbmtext pbmtextps pbmto10x '+
        'pbmtoascii pbmtoatk pbmtobbnbg pbmtocmuwm pbmtoepsi pbmtoepson '+
        'pbmtog3 pbmtogem pbmtogo pbmtoicon pbmtolj pbmtomacp pbmtomda '+
        'pbmtomgr pbmtonokia pbmtopgm pbmtopi3 pbmtoplot pbmtoppa pbmtopsg3 '+
        'pbmtoptx pbmtowbmp pbmtox10bm pbmtoxbm pbmtoybm pbmtozinc pbmupc '+
        'pcf2vpnc pcimodules pcmanfm pcre-config pcxtoppm pdb2mdb pdbedit '+
        'pdf2dsc pdf2ps pdf2svg pdfclose pdffonts pdfimages pdfinfo pdfopen '+
        'pdfopt pdfroff pdfseparate pdftex pdftexi2dvi pdftk pdftocairo '+
        'pdftohtml pdftoppm pdftops pdftosrc pdftotext pdfunite pd-gem pd-gui '+
        'pdiff pdreceive pdsend peekfd perf perl perl5.14.2 perlbug perldoc '+
        'perlivp perlthanks permview pf2afm pfb2pfa pfbtopfa pfbtops pg pgawk '+
        'pgmbentley pgmcrater pgmedge pgmenhance pgmhist pgmkernel pgmnoise '+
        'pgmramp pgmslice pgmtexture pgmtofs pgmtolispm pgmtopbm pgmtoppm '+
        'pgrep photorec php5 pi1toppm pi3topbm pic pic2graph pic2plot pic2tpic '+
        'picocom piconv pidgin pilconvert.py pildriver.py pilfile.py '+
        'pilfont.py pilprint.py ping ping6 pingus pinky pixeltool pjtoppm '+
        'pk2bm pkaction pkcheck pkcon pk-debuginfo-install pkexec pkg-config '+
        'pkgenpack pkmon pktogf pkttyagent pl2pm plasmapkg playdv plog plot '+
        'plotchangelog plotfont plot_hpgl_file_max_size.py plot_hpgl_file.py '+
        'plot_hpgl_file_virtual.py pltotf plymouth pmap pm-is-supported pmpost '+
        'png2pat pngtopnm pnm2ppa pnmalias pnmarith pnmcat pnmcolormap pnmcomp '+
        'pnmconvol pnmcrop pnmcut pnmdepth pnmenlarge pnmfile pnmflip pnmgamma '+
        'pnmhisteq pnmhistmap pnmindex pnminvert pnmixer pnmmargin pnmmontage '+
        'pnmnlfilt pnmnorm pnmpad pnmpaste pnmpsnr pnmquant pnmremap pnmrotate '+
        'pnmscale pnmscalefixed pnmshear pnmsmooth pnmsplit pnmtile pnmtoddif '+
        'pnmtofiasco pnmtofits pnmtojpeg pnmtopalm pnmtoplainpnm pnmtopng '+
        'pnmtops pnmtorast pnmtorle pnmtosgi pnmtosir pnmtotiff pnmtotiffcmyk '+
        'pnmtoxwd po2debconf pod2html pod2latex pod2man pod2text pod2usage '+
        'podbeuter podchecker podebconf-display-po podebconf-report-po '+
        'podselect poff pon post-grohtml ppdc ppdhtml ppdi ppdmerge ppdpo pphs '+
        'ppltotf ppm2tiff ppm3d ppmbrighten ppmchange ppmcie ppmcolormask '+
        'ppmcolors ppmdim ppmdist ppmdither ppmfade ppmflash ppmforge ppmhist '+
        'ppmlabel ppmmake ppmmix ppmntsc ppmpat ppmquant ppmquantall ppmqvga '+
        'ppmrainbow ppmrelief ppmshadow ppmshift ppmtoacad ppmtobmp ppmtoeyuv '+
        'ppmtogif ppmtoicr ppmtoilbm ppmtoleaf ppmtolj ppmtolss16 ppmtomap '+
        'ppmtomitsu ppmtompeg ppmtoneo ppmtopcx ppmtopgm ppmtopi1 ppmtopict '+
        'ppmtopj ppmtopuzz ppmtorgb3 ppmtosixel ppmtotga ppmtouil ppmtowinicon '+
        'ppmtoxpm ppmtoyuv ppmtoyuvsplit ppmtv pr precat preconv pre-grohtml '+
        'prename preunzip prezip prezip-bin printafm printenv printerbanner '+
        'printer-profile procan profiles prove prtstat prune ps ps2ascii '+
        'ps2eps ps2epsi ps2frag ps2lexmark ps2pdf ps2pdf12 ps2pdf13 ps2pdf14 '+
        'ps2pdfwr ps2pk ps2ps ps2ps2 psbook psed psfxtable psidtopgm psjoin '+
        'pslatex psmandup psmerge psnup psresize psselect psset pstoedit '+
        'pstopnm pstops pstree pstruct ptar ptardiff ptargrep ptex ptftopl '+
        'pts-subscribe ptx pulseaudio puredata purifyeps purple-remote '+
        'purple-send purple-send-async purple-url-handler pxelinux-options '+
        'py3_compilefiles pyalacarte pyalamode pycentral pyclean pycompile '+
        'py_compilefiles pycrust pydoc2.6 pydoc2.7 pydoc3.2 pygettext2.6 '+
        'pygettext2.7 pygettext3.2 pyhtmlizer python2.6 python2.7 python3.2mu '+
        'pywrap pywxrc qcollectiongenerator qdbus qdbuscpp2xml qdbusviewer '+
        'qdbusxml2cpp qdoc3 qjackctl qmake-qt4 qmlplugindump qmlprofiler '+
        'qmlpuppet qmlviewer qpdf qpdldecode qrencode qrttoppm QSO qt3to4 '+
        'qtcreator qtcreator_process_stub qtdemo qt-faststart qtpromaker '+
        'qttracereplay querybts qvfb qvlc rake1.9.1 ranlib rapper rapt-file '+
        'rarian-example rarian-sk-config rarian-sk-extract rarian-sk-gen-uuid '+
        'rarian-sk-get-cl rarian-sk-get-content-list '+
        'rarian-sk-get-extended-content-list rarian-sk-get-scripts '+
        'rarian-sk-install rarian-sk-migrate rarian-sk-preinstall '+
        'rarian-sk-rebuild rarian-sk-update ras2tiff rasttopnm raw2tiff '+
        'rawtopgm rawtoppm rb rc-alert rcc rcs-checkin.emacs23 rctest rdate '+
        'rdfproc rdjpgcom rdoc1.8 rdoc1.9.1 realpath rearj rebuild-gcj-db '+
        'recode recode-sr-latin recordmydesktop recountdiff rediff '+
        'redland-db-upgrade refer regexp-assemble rename.ul renice reportbug '+
        'report-hw resgen resgen2 resize resizecons rev revpath rfcomm rgb2pat '+
        'rgb2ycbcr rgb3toppm rgrep rhythmbox rhythmbox-client ri1.8 ri1.9.1 '+
        'ristretto rl rlwrap rm rmadison rman rmdir roff2dvi roff2html '+
        'roff2pdf roff2ps roff2text roff2x routef routel rpcclient rpcgen '+
        'rpcinfo rpl rpl8 rpm rpm2cpio rpmbuild rpmdb rpmgraph rpmkeys rpmsign '+
        'rpmspec rstart rstartd rsync rtmpdump rtorrent rubibtex ruby1.8 '+
        'ruby1.9.1 rumakeindex runcon rundig run-mailcap run-parts runscript '+
        'run-with-aspell runzip rvlc rx rz rzip s2p sane-find-scanner savelog '+
        'sb sbigtopgm scanimage sccmap scp screen screendump scribus script '+
        'scriptreplay scrot sdiff sdl-config sdparm sdptool seahorse secutil '+
        'sed select-default-iwrap sendiso sensible-browser sensible-editor '+
        'sensible-pager sensors sensors-conf-convert seq services-admin '+
        'sessreg setarch setcifsacl setfacl setfont setkeycodes setleds '+
        'setlogcons setmetamode setpci setreg setserial setsid setterm '+
        'setupcon setvtrgb setxkbmap sfddiff sftp sgen sgitopnm sgml2xml '+
        'sgmldiff sgmlnorm sgmlspl sha1pass sha1sum sha224sum sha256sum '+
        'sha384sum sha512sum shar shares-admin shasum shell-quote showchar '+
        'showconsolefont showfigfonts showfont showkey showrgb shred shuf '+
        'signcode sirtopnm size skill skype sl slabtop sldtoppm sleep sl-h '+
        'slim slimconf slock slxdecode smbcacls smbclient smbcontrol '+
        'smbcquotas smbget smbpasswd smbspool smbstatus.samba3 smbtar smbtree '+
        'smime_keys smproxy smuxi-frontend-gnome sn sntp SOAPsh soapsuds socat '+
        'soelim software-properties-gtk solid-hardware sopranocmd sopranod '+
        'sort sort-dctrl sox spam spctoppm spd-say speaker-test '+
        'speech-dispatcher spent splain spline split splitdiff splitfont sprof '+
        'spumux sputoppm spuunmux sqlmetal sqlsharp squeak ss ssconvert sselp '+
        'ssgrep ssh ssh-add ssh-agent ssh-argv0 ssh-copy-id sshfs ssh-keygen '+
        'ssh-keyscan ssh-vulnkey ssid ssindex st st4topgm start-pulseaudio-kde '+
        'start-pulseaudio-x11 startx stat stdbuf stopwatch strace streamer '+
        'stream.im6 strfile strings strip stty stubmaker su sum sushi '+
        'su-to-root svcutil svlc svn svnadmin svnauthz-validate svndumpfilter '+
        'svnlook svnmucc svnpath svn-populate-node-origins-index svnserve '+
        'svnsync svnversion swarp sx synaptic-pkexec sync synclient synctex '+
        'syndaemon syslinux syslinux2ansi system-config-printer sz tabbed tabs '+
        'tac tagpending tail tailf take-vector-screenshot tangle tap2deb '+
        'tap2rpm tapconvert tar tasksel taskset tbl tbl-dctrl tcldocstrip '+
        'tclsh8.4 tclsh8.5 tdbbackup.tdbtools tdbdump tdbrestore tdbtool '+
        'teckit_compile tee tek2plot telnet.netkit tempfile test testasciidoc '+
        'testdisk testlibraw testparm.samba3 testrb1.8 testrb1.9.1 tex '+
        'tex2xindy texconfig texconfig-dialog texconfig-sys texi2dvi '+
        'texi2dvi4a2ps texi2html texi2pdf texindex texindy texlinks text2wave '+
        'tfmtodit tftopl tgatoppm tgz thinkjettopbm thumbnail Thunar '+
        'thunar-settings thunar-volman thunar-volman-settings tic tie tiff2bw '+
        'tiff2pdf tiff2ps tiff2rgba tiffcmp tiffcp tiffcrop tiffdither '+
        'tiffdump tiffinfo tiffmedian tiffset tiffsplit tifftopnm time '+
        'time-admin timeout timidity tint2 tint2conf tint2restart '+
        'tintwizard.py tinyirc tkconch tload tl-paper tmux toc2cue toe top '+
        'toshset touch tpic2pdftex tput tr tracepath tracepath6 traceproto.db '+
        'traceroute6.iputils traceroute.db traceroute-nanog transfig '+
        'transition-check transmission-gtk transset transset-df tred trial '+
        'troff true truncate tset tsort ttf2afm ttf2pk ttf2tfm ttfdump tty '+
        'tunes2pod twistd tzselect uae ucf ucfq ucfr ucs2any udisks '+
        'udisks-tcp-bridge ufraw-batch uic3 uic-qt4 ul ulockmgr_server umax_pp '+
        'umount unaccent unace unalz uname unattended-upgrade uncompress '+
        'unetbootin unexpand unflatten unicode_start unicode_stop uniconvertor '+
        'unify uniq unlink unopkg unrar-nonfree unshar unshare unsquashfs '+
        'unstr unwrapdiff unxrandr unzip unzipsfx upbibtex update-alternatives '+
        'updatedb.mlocate update-desktop-database update-gconf-defaults '+
        'update-manager update-menus update-mime-database '+
        'update-mime-database.real update-pciids update-perl-sax-parsers '+
        'upower uppltotf uptex uptftopl uptime.orig.procps usb-devices '+
        'usbhid-dump usb_printerid uscan users users-admin user-setup uudecode '+
        'uuencode uuidgen uupdate uxterm uz uzbl-browser uzbl-core '+
        'uzbl-event-manager uzbl-tabbed vam vcut vdir vftovp view_hpgl_file.py '+
        'viewnior viewres vim-addon-manager vim-addons vim.basic vimdot '+
        'vimplate vim.tiny vimtutor virt_mail virtuoso-t visgrep vlc '+
        'vlc-wrapper vlna vmmouse_detect vmstat vmwarectrl volname '+
        'vorbiscomment vorbistagedit vptovf vsyasm w3m w3mman wall watch '+
        'wbinfo wbmptopbm wc wdiff wdiff2 weather weave wftopfa wget whatis '+
        'what-patch whereis which whiptail who whoami whodepends whois '+
        'who-uploads wikipedia2text winicontoppm wish8.4 wish8.5 wmctrl '+
        'wmf2eps wmf2fig wmf2gd wmf2svg wmf2x wmname wnpp-alert wnpp-check '+
        'wodim word-list-compress wovp2ovf wpa_passphrase w.procps wput '+
        'wrap-and-sort wrjpgcom wsdl wsdl2 X x11perf x11perfcomp x11vnc x264 '+
        'xargs xauth xbiff xbmtopbm xbuild xcalc xcalib xcf2png xcf2pnm '+
        'xcfinfo xcfview xchat xclip xclipboard xclip-copyfile xclip-cutfile '+
        'xclip-pastefile xclock xcmsdb xcompmgr xconsole xcursorgen xcutsel '+
        'xdemorse xdg-desktop-icon xdg-desktop-menu xdg-email xdg-mime '+
        'xdg-open xdg-screensaver xdg-settings xdg-user-dir xditview xdotool '+
        'xdpyinfo xdriinfo xdvi xdvipdfmx xdvi-xaw xedit Xephyr xetex xev '+
        'xeyes xfburn xfce4-mixer xfce4-notifyd-config xfce4-panel '+
        'xfce4-popup-applicationsmenu xfce4-popup-directorymenu '+
        'xfce4-popup-windowmenu xfce4-power-information xfce4-power-manager '+
        'xfce4-power-manager-settings xfce4-screenshooter xfce4-volumed '+
        'xfconf-query xfd xfontsel xfsinfo xgamma xgc xgettext xhost ximtoppm '+
        'xindy xine-list-1.1 xinit xinput xkbbell xkbcomp xkbevd xkbprint '+
        'xkbvleds xkbwatch xkeystone xkill xli xlito xload xlogo xlsatoms '+
        'xlsclients xlsfonts xmacroplay xmacroplay-keys xmacrorec xmacrorec2 '+
        'xmag xman xmessage xminicom xmkmf xml2-config xml2po xmlcatalog xmlif '+
        'xmllint xmlpatterns xmlpatternsvalidator XMLRPCsh xmlto xmodmap xmore '+
        'xmousepos Xorg xpath xpenguins xpenguins-stop xpmtoppm xprop '+
        'xqxdecode xrandr xrced xrdb xrefresh xsane xscreensaver '+
        'xscreensaver-command xscreensaver-demo xscreensaver-getimage '+
        'xscreensaver-getimage-file xscreensaver-getimage-video '+
        'xscreensaver-text xsd xsel xset xsetmode xsetpointer xsetroot '+
        'xsetwacom xsltproc xsm xstdcmap xsubpp xte xterm xtightvncviewer '+
        'xtotroff xtrlock Xvfb xvfb-run xvidtune xvinfo xvkbd xvminitoppm xwd '+
        'xwdtopnm xwininfo xwud xxd xz xzdiff xzgrep xzless xzmore yasm '+
        'ybmtopbm yelp yes ypdomainname ytasm yuvsplittoppm yuvtoppm zbarcam '+
        'zbarimg zcat zcmp zdiff zdump zegrep zeisstopnm zeitgeist-daemon '+
        'zenity zfgrep zforce zgrep zip zipcloak zipdetails zipgrep zipinfo '+
        'zipnote zipsplit zjsdecode zless zlib-flate zmore znew zoo zsoelim',
      operator:
        '-ne -eq -lt -gt -f -d -e -s -l -a' // relevance booster
    },
    contains: [
      {
        className: 'shebang',
        begin: /^#![^\n]+sh\s*$/,
        relevance: 10
      },
      {
        className: 'function',
        begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
        returnBegin: true,
        contains: [hljs.inherit(hljs.TITLE_MODE, {begin: /\w[\w\d_]*/})],
        relevance: 0
      },
      hljs.HASH_COMMENT_MODE,
      hljs.NUMBER_MODE,
      QUOTE_STRING,
      APOS_STRING,
      VAR
    ]
  };
}
