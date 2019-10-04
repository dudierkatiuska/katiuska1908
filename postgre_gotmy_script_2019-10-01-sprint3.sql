--
-- TOC entry 3126 (class 0 OID 49487)
-- Dependencies: 198
-- Data for Name: tbl_access; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.tbl_access (acce_ide, acce_nick, acce_password, acce_user, acce_moderator, acce_status) VALUES (10, 'prueba2@gmail.com', '17501515', 29, '0', '1');
INSERT INTO public.tbl_access (acce_ide, acce_nick, acce_password, acce_user, acce_moderator, acce_status) VALUES (11, 'prueba3@gmail.com', '17501515', 30, '0', '1');
INSERT INTO public.tbl_access (acce_ide, acce_nick, acce_password, acce_user, acce_moderator, acce_status) VALUES (12, 'prueba3@gmail.com', '17501515', 32, '0', '1');
INSERT INTO public.tbl_access (acce_ide, acce_nick, acce_password, acce_user, acce_moderator, acce_status) VALUES (13, 'prueba4@gmail.com', '17501515', 35, '0', '1');
INSERT INTO public.tbl_access (acce_ide, acce_nick, acce_password, acce_user, acce_moderator, acce_status) VALUES (14, 'nick30', '17501515', 19, '1', '1');
INSERT INTO public.tbl_access (acce_ide, acce_nick, acce_password, acce_user, acce_moderator, acce_status) VALUES (16, 'nick30', '17501515', 19, '1', '1');
INSERT INTO public.tbl_access (acce_ide, acce_nick, acce_password, acce_user, acce_moderator, acce_status) VALUES (17, 'nick30', '17501515', 19, '1', '1');
INSERT INTO public.tbl_access (acce_ide, acce_nick, acce_password, acce_user, acce_moderator, acce_status) VALUES (19, 'nick31', '17501515', 19, '1', '1');
INSERT INTO public.tbl_access (acce_ide, acce_nick, acce_password, acce_user, acce_moderator, acce_status) VALUES (20, 'nick31', '17501515', 19, '1', '1');
INSERT INTO public.tbl_access (acce_ide, acce_nick, acce_password, acce_user, acce_moderator, acce_status) VALUES (21, 'nick31', '17501515', 19, '1', '1');
INSERT INTO public.tbl_access (acce_ide, acce_nick, acce_password, acce_user, acce_moderator, acce_status) VALUES (23, 'nick31', '17501515', 19, '1', '1');
INSERT INTO public.tbl_access (acce_ide, acce_nick, acce_password, acce_user, acce_moderator, acce_status) VALUES (24, 'nick31', '17501515', 19, '1', '1');
INSERT INTO public.tbl_access (acce_ide, acce_nick, acce_password, acce_user, acce_moderator, acce_status) VALUES (37, 'nuevo', '17501515', 7, '1', '1');
INSERT INTO public.tbl_access (acce_ide, acce_nick, acce_password, acce_user, acce_moderator, acce_status) VALUES (38, 'prueba3@gmail.com', '17501515', 36, '0', '1');
INSERT INTO public.tbl_access (acce_ide, acce_nick, acce_password, acce_user, acce_moderator, acce_status) VALUES (5, 'hola', '17501515', 19, '1', '1');
INSERT INTO public.tbl_access (acce_ide, acce_nick, acce_password, acce_user, acce_moderator, acce_status) VALUES (40, 'nuevo', '17501515', 7, '1', '1');


--
-- TOC entry 3131 (class 0 OID 49500)
-- Dependencies: 203
-- Data for Name: tbl_accesstypeuser; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.tbl_accesstypeuser (actu_ide, actu_acce, actu_usty, actu_spec) VALUES (1, 5, 1, 2);
INSERT INTO public.tbl_accesstypeuser (actu_ide, actu_acce, actu_usty, actu_spec) VALUES (2, 5, 2, 2);


--
-- TOC entry 3133 (class 0 OID 49509)
-- Dependencies: 205
-- Data for Name: tbl_category; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.tbl_category (cate_ide, cate_description, cate_status) VALUES (1, 'Sports', '1');
INSERT INTO public.tbl_category (cate_ide, cate_description, cate_status) VALUES (7, 'Music33', '1');
INSERT INTO public.tbl_category (cate_ide, cate_description, cate_status) VALUES (8, 'Music33', '1');
INSERT INTO public.tbl_category (cate_ide, cate_description, cate_status) VALUES (9, 'Gaming', '1');


--
-- TOC entry 3136 (class 0 OID 49517)
-- Dependencies: 208
-- Data for Name: tbl_city; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.tbl_city (city_ide, city_description, city_capital, city_zipcode, city_prov, city_status) VALUES (1, 'San Cristobal', '1', '5001  ', 1, '1');
INSERT INTO public.tbl_city (city_ide, city_description, city_capital, city_zipcode, city_prov, city_status) VALUES (3, 'Trujillo', '1', '5001  ', 1, '1');


--
-- TOC entry 3138 (class 0 OID 49524)
-- Dependencies: 210
-- Data for Name: tbl_codepromotion; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.tbl_codepromotion (copr_ide, copr_description, copr_ticket) VALUES (1, 'KHTY85417', '100$');


--
-- TOC entry 3140 (class 0 OID 49530)
-- Dependencies: 212
-- Data for Name: tbl_country; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.tbl_country (coun_ide, coun_iso23366, coun_description, coun_icon, coun_prefixphone, coun_status) VALUES (3, 'CO', 'Colombia', 'Colombia', '+57   ', '1');
INSERT INTO public.tbl_country (coun_ide, coun_iso23366, coun_description, coun_icon, coun_prefixphone, coun_status) VALUES (1, 'PR', 'País por defecto', 'icono', '      ', '1');


--
-- TOC entry 3142 (class 0 OID 49536)
-- Dependencies: 214
-- Data for Name: tbl_language; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.tbl_language (lang_ide, lang_description, lang_status) VALUES (1, 'Ingles', '1');
INSERT INTO public.tbl_language (lang_ide, lang_description, lang_status) VALUES (2, 'Español', '1');


--
-- TOC entry 3147 (class 0 OID 49548)
-- Dependencies: 219
-- Data for Name: tbl_liveevents; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.tbl_liveevents (live_ide, live_description, live_dtcreation, live_video, live_actu, live_participants, live_request) VALUES (2, 'evento en vivo2', '2019-01-01 04:00:00', 1, 1, 1, 12);
INSERT INTO public.tbl_liveevents (live_ide, live_description, live_dtcreation, live_video, live_actu, live_participants, live_request) VALUES (3, 'evento en vivo3', '2019-01-01 04:00:00', 1, 1, 1, 12);
INSERT INTO public.tbl_liveevents (live_ide, live_description, live_dtcreation, live_video, live_actu, live_participants, live_request) VALUES (1, 'evento nuevo', '2019-01-01 04:00:00', 1, 1, 1, 11);
INSERT INTO public.tbl_liveevents (live_ide, live_description, live_dtcreation, live_video, live_actu, live_participants, live_request) VALUES (4, 'evento en vivo4', '2019-01-01 04:00:00', 1, 1, 1, 12);
INSERT INTO public.tbl_liveevents (live_ide, live_description, live_dtcreation, live_video, live_actu, live_participants, live_request) VALUES (5, 'evento en vivo4', '2019-09-17 04:00:00', 1, 1, 1, 12);


--
-- TOC entry 3149 (class 0 OID 49557)
-- Dependencies: 221
-- Data for Name: tbl_module; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.tbl_module (modu_ide, modu_description, modu_visibility, modu_icon) VALUES (2, 'borrar', 1, '1');
INSERT INTO public.tbl_module (modu_ide, modu_description, modu_visibility, modu_icon) VALUES (1, 'crear22', 2, '1');
INSERT INTO public.tbl_module (modu_ide, modu_description, modu_visibility, modu_icon) VALUES (3, 'actualizar', 1, '1');


--
-- TOC entry 3151 (class 0 OID 49563)
-- Dependencies: 223
-- Data for Name: tbl_pemissioncrud; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.tbl_pemissioncrud (pecr_ide, pecr_description, pecr_url, pecr_icon) VALUES (1, 'nuevo crear permiso', 'https://www.djamware.com', 'icono');
INSERT INTO public.tbl_pemissioncrud (pecr_ide, pecr_description, pecr_url, pecr_icon) VALUES (35, 'crear permiso3', 'https://www.djamware.com', 'icono');
INSERT INTO public.tbl_pemissioncrud (pecr_ide, pecr_description, pecr_url, pecr_icon) VALUES (36, 'crear permiso3', 'https://www.djamware.com', 'icono');
INSERT INTO public.tbl_pemissioncrud (pecr_ide, pecr_description, pecr_url, pecr_icon) VALUES (37, 'crear permiso25', 'https://www.djamware.com', 'icono');
INSERT INTO public.tbl_pemissioncrud (pecr_ide, pecr_description, pecr_url, pecr_icon) VALUES (38, 'crear permiso25', 'https://www.djamware.com', 'icono');


--
-- TOC entry 3156 (class 0 OID 49575)
-- Dependencies: 228
-- Data for Name: tbl_permission; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.tbl_permission (perm_ide, perm_actu, perm_sumo, perm_pecr, perm_status) VALUES (3, 1, 2, 35, '1');


--
-- TOC entry 3159 (class 0 OID 49586)
-- Dependencies: 231
-- Data for Name: tbl_province; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.tbl_province (prov_ide, prov_iso233661, prov_description, prov_country, prov_status) VALUES (1, 'TA   ', 'Táchira', 1, '1');
INSERT INTO public.tbl_province (prov_ide, prov_iso233661, prov_description, prov_country, prov_status) VALUES (2, 'PR   ', 'Provincia por defecto', 1, '1');


--
-- TOC entry 3163 (class 0 OID 49597)
-- Dependencies: 235
-- Data for Name: tbl_rating; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.tbl_rating (rati_ide, rati_valor, rati_video, rati_actu, rati_dtcreation) VALUES (1, '50estrellas', 1, 1, '2019-11-09 04:00:00');
INSERT INTO public.tbl_rating (rati_ide, rati_valor, rati_video, rati_actu, rati_dtcreation) VALUES (2, '500estrellas', 1, 2, '2019-11-09 04:00:00');


--
-- TOC entry 3167 (class 0 OID 49609)
-- Dependencies: 239
-- Data for Name: tbl_request; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.tbl_request (requ_ide, requ_description, requ_dtcreation, requ_message, requ_emisor, requ_receptor) VALUES (12, 'solicitud25255855', '2019-11-09 04:00:00', 'solicitud', 1, 2);
INSERT INTO public.tbl_request (requ_ide, requ_description, requ_dtcreation, requ_message, requ_emisor, requ_receptor) VALUES (11, 'actualizada la solictud', '2019-11-09 04:00:00', 'solicitud', 1, 2);


--
-- TOC entry 3169 (class 0 OID 49617)
-- Dependencies: 241
-- Data for Name: tbl_social; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.tbl_social (soci_ide, soci_description, soci_icon) VALUES (1, 'Instagram', 'Instagram');


--
-- TOC entry 3172 (class 0 OID 49625)
-- Dependencies: 244
-- Data for Name: tbl_specialities; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.tbl_specialities (spec_ide, spec_description, spec_suca, spec_status) VALUES (2, 'coach', 1, '1');


--
-- TOC entry 3175 (class 0 OID 49634)
-- Dependencies: 247
-- Data for Name: tbl_subcategory; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.tbl_subcategory (suca_ide, suca_description, suca_cate, suca_status) VALUES (3, 'beisbol', 1, '1');
INSERT INTO public.tbl_subcategory (suca_ide, suca_description, suca_cate, suca_status) VALUES (1, 'Fotbool233333333', 1, '2');


--
-- TOC entry 3178 (class 0 OID 49643)
-- Dependencies: 250
-- Data for Name: tbl_submodule; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.tbl_submodule (sumo_ide, sumo_description, sumo_url, sumo_icon, sumo_order, sumo_modu) VALUES (2, 'coach', 'https://www.djamware.com', 'icono', 1, 1);
INSERT INTO public.tbl_submodule (sumo_ide, sumo_description, sumo_url, sumo_icon, sumo_order, sumo_modu) VALUES (3, 'crearsubmodulo', 'https://www.djamware.com', 'icono', 1, 1);


--
-- TOC entry 3182 (class 0 OID 49654)
-- Dependencies: 254
-- Data for Name: tbl_ticket; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.tbl_ticket (tick_ide, tick_description, tick_dtcreation, tick_liveevents, tick_valor, tick_cupon) VALUES (1, 'ticket video11111', '2019-01-09 04:00:00', 1, '500$', 1);


--
-- TOC entry 3185 (class 0 OID 49664)
-- Dependencies: 257
-- Data for Name: tbl_user; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.tbl_user (user_ide, user_name, user_lastname, user_email, user_birthdate, user_aboutme, user_avatar, user_city, user_mobile, user_dtregister, user_dtactivation) VALUES (5, 'Prueba', 'Prueba', 'prueba@gmail.com', '2019-05-09 04:00:00', 'Prueba', 'asd', 1, '123456789', '2019-05-09 04:00:00', '2019-05-09 04:00:00');
INSERT INTO public.tbl_user (user_ide, user_name, user_lastname, user_email, user_birthdate, user_aboutme, user_avatar, user_city, user_mobile, user_dtregister, user_dtactivation) VALUES (8, 'Prueba2', 'Prueba2', 'prueba@gmail.com', '2019-05-09 04:00:00', 'Prueba', 'asd', 1, '123456789', '2019-05-09 04:00:00', '2019-05-09 04:00:00');
INSERT INTO public.tbl_user (user_ide, user_name, user_lastname, user_email, user_birthdate, user_aboutme, user_avatar, user_city, user_mobile, user_dtregister, user_dtactivation) VALUES (15, 'Naudys', 'Reina', 'naudys16@gmail.com', '2019-01-01 04:00:00', 'Hola', 'Hola', 1, '4267730125', '2019-05-09 04:00:00', '2019-05-09 04:00:00');
INSERT INTO public.tbl_user (user_ide, user_name, user_lastname, user_email, user_birthdate, user_aboutme, user_avatar, user_city, user_mobile, user_dtregister, user_dtactivation) VALUES (16, 'katiuska', 'dudier', 'katimil@gmail.com', '2019-01-01 04:00:00', 'Hola', 'Hola', 1, '4267730125', '2019-05-09 04:00:00', '2019-05-09 04:00:00');
INSERT INTO public.tbl_user (user_ide, user_name, user_lastname, user_email, user_birthdate, user_aboutme, user_avatar, user_city, user_mobile, user_dtregister, user_dtactivation) VALUES (17, 'gotmy', 'gotmy', 'katimil@gmail.com', '2019-01-01 04:00:00', 'Hola', 'Hola', 1, '4267730125', '2019-05-09 04:00:00', '2019-05-09 04:00:00');
INSERT INTO public.tbl_user (user_ide, user_name, user_lastname, user_email, user_birthdate, user_aboutme, user_avatar, user_city, user_mobile, user_dtregister, user_dtactivation) VALUES (18, 'gotmy22', 'gotmy', 'katimil@gmail.com', '2019-01-01 04:00:00', 'Hola', 'Hola', 1, '4267730125', '2019-05-09 04:00:00', '2019-05-09 04:00:00');
INSERT INTO public.tbl_user (user_ide, user_name, user_lastname, user_email, user_birthdate, user_aboutme, user_avatar, user_city, user_mobile, user_dtregister, user_dtactivation) VALUES (19, 'milena', 'gotmy', 'katimil@gmail.com', '2019-01-01 04:00:00', 'Hola', 'Hola', 1, '4267730125', '2019-05-09 04:00:00', '2019-05-09 04:00:00');
INSERT INTO public.tbl_user (user_ide, user_name, user_lastname, user_email, user_birthdate, user_aboutme, user_avatar, user_city, user_mobile, user_dtregister, user_dtactivation) VALUES (20, 'milena65', 'gotmy', 'katimil@gmail.com', '2019-01-01 04:00:00', 'Hola', 'Hola', 1, '4267730125', '2019-05-09 04:00:00', '2019-05-09 04:00:00');
INSERT INTO public.tbl_user (user_ide, user_name, user_lastname, user_email, user_birthdate, user_aboutme, user_avatar, user_city, user_mobile, user_dtregister, user_dtactivation) VALUES (7, 'Naudys25', 'Reina', 'naudys16@gmail.com', '2019-01-01 04:00:00', 'Hola', 'Hola', 1, '4267730125', '2019-05-09 04:00:00', '2019-05-09 04:00:00');
INSERT INTO public.tbl_user (user_ide, user_name, user_lastname, user_email, user_birthdate, user_aboutme, user_avatar, user_city, user_mobile, user_dtregister, user_dtactivation) VALUES (21, 'dudier', 'gotmy', 'katimil@gmail.com', '2019-01-01 04:00:00', 'Hola', 'Hola', 1, '4267730125', '2019-05-09 04:00:00', '2019-05-09 04:00:00');
INSERT INTO public.tbl_user (user_ide, user_name, user_lastname, user_email, user_birthdate, user_aboutme, user_avatar, user_city, user_mobile, user_dtregister, user_dtactivation) VALUES (22, 'Rojas', 'gotmy', 'katimil@gmail.com', '2019-01-01 04:00:00', 'Hola', 'Hola', 1, '4267730125', '2019-05-09 04:00:00', '2019-05-09 04:00:00');
INSERT INTO public.tbl_user (user_ide, user_name, user_lastname, user_email, user_birthdate, user_aboutme, user_avatar, user_city, user_mobile, user_dtregister, user_dtactivation) VALUES (23, 'milena', 'gotmy', 'katimil@gmail.com', '2019-01-01 04:00:00', 'Hola', 'Hola', 1, '4267730125', '2019-05-09 04:00:00', '2019-05-09 04:00:00');
INSERT INTO public.tbl_user (user_ide, user_name, user_lastname, user_email, user_birthdate, user_aboutme, user_avatar, user_city, user_mobile, user_dtregister, user_dtactivation) VALUES (24, 'milena', 'gotmy', 'katimil@gmail.com', '2019-01-01 04:00:00', 'Hola', 'Hola', 1, '4267730125', '2019-05-09 04:00:00', '2019-05-09 04:00:00');
INSERT INTO public.tbl_user (user_ide, user_name, user_lastname, user_email, user_birthdate, user_aboutme, user_avatar, user_city, user_mobile, user_dtregister, user_dtactivation) VALUES (25, '', '', 'hola2', '2019-09-17 04:00:00', '', '', 1, '', '2019-09-17 04:00:00', '2019-09-17 04:00:00');
INSERT INTO public.tbl_user (user_ide, user_name, user_lastname, user_email, user_birthdate, user_aboutme, user_avatar, user_city, user_mobile, user_dtregister, user_dtactivation) VALUES (26, '', '', 'prueba1@gmail.com', '2019-09-17 04:00:00', '', '', 1, '', '2019-09-17 04:00:00', '2019-09-17 04:00:00');
INSERT INTO public.tbl_user (user_ide, user_name, user_lastname, user_email, user_birthdate, user_aboutme, user_avatar, user_city, user_mobile, user_dtregister, user_dtactivation) VALUES (27, '', '', 'prueba1@gmail.com', '2019-09-17 04:00:00', '', '', 1, '', '2019-09-17 04:00:00', '2019-09-17 04:00:00');
INSERT INTO public.tbl_user (user_ide, user_name, user_lastname, user_email, user_birthdate, user_aboutme, user_avatar, user_city, user_mobile, user_dtregister, user_dtactivation) VALUES (28, '', '', 'prueba1@gmail.com', '2019-09-17 04:00:00', '', '', 1, '', '2019-09-17 04:00:00', '2019-09-17 04:00:00');
INSERT INTO public.tbl_user (user_ide, user_name, user_lastname, user_email, user_birthdate, user_aboutme, user_avatar, user_city, user_mobile, user_dtregister, user_dtactivation) VALUES (29, '', '', 'prueba2@gmail.com', '2019-09-17 04:00:00', '', '', 1, '', '2019-09-17 04:00:00', '2019-09-17 04:00:00');
INSERT INTO public.tbl_user (user_ide, user_name, user_lastname, user_email, user_birthdate, user_aboutme, user_avatar, user_city, user_mobile, user_dtregister, user_dtactivation) VALUES (30, '', '', 'prueba3@gmail.com', '2019-09-17 04:00:00', '', '', 1, '', '2019-09-17 04:00:00', '2019-09-17 04:00:00');
INSERT INTO public.tbl_user (user_ide, user_name, user_lastname, user_email, user_birthdate, user_aboutme, user_avatar, user_city, user_mobile, user_dtregister, user_dtactivation) VALUES (31, '', '', 'prueba3@gmail.com', '2019-09-17 04:00:00', '', '', 1, '', '2019-09-17 04:00:00', '2019-09-17 04:00:00');
INSERT INTO public.tbl_user (user_ide, user_name, user_lastname, user_email, user_birthdate, user_aboutme, user_avatar, user_city, user_mobile, user_dtregister, user_dtactivation) VALUES (32, '', '', 'prueba3@gmail.com', '2019-09-17 04:00:00', '', '', 1, '', '2019-09-17 04:00:00', '2019-09-17 04:00:00');
INSERT INTO public.tbl_user (user_ide, user_name, user_lastname, user_email, user_birthdate, user_aboutme, user_avatar, user_city, user_mobile, user_dtregister, user_dtactivation) VALUES (33, 'milena', 'gotmy', 'katimil@gmail.com', '2019-01-01 04:00:00', 'Hola', 'Hola', 1, '4267730125', '2019-05-09 04:00:00', '2019-05-09 04:00:00');
INSERT INTO public.tbl_user (user_ide, user_name, user_lastname, user_email, user_birthdate, user_aboutme, user_avatar, user_city, user_mobile, user_dtregister, user_dtactivation) VALUES (34, 'milena', 'gotmy', 'katimil@gmail.com', '2019-01-01 04:00:00', 'Hola', 'Hola', 1, '4267730125', '2019-05-09 04:00:00', '2019-05-09 04:00:00');
INSERT INTO public.tbl_user (user_ide, user_name, user_lastname, user_email, user_birthdate, user_aboutme, user_avatar, user_city, user_mobile, user_dtregister, user_dtactivation) VALUES (35, '', '', 'prueba4@gmail.com', '2019-09-17 04:00:00', '', '', 1, '', '2019-09-17 04:00:00', '2019-09-17 04:00:00');
INSERT INTO public.tbl_user (user_ide, user_name, user_lastname, user_email, user_birthdate, user_aboutme, user_avatar, user_city, user_mobile, user_dtregister, user_dtactivation) VALUES (36, '', '', 'prueba3@gmail.com', '2019-09-27 04:00:00', '', '', 1, '', '2019-09-27 04:00:00', '2019-09-27 04:00:00');
INSERT INTO public.tbl_user (user_ide, user_name, user_lastname, user_email, user_birthdate, user_aboutme, user_avatar, user_city, user_mobile, user_dtregister, user_dtactivation) VALUES (37, '', '', '', '2019-09-27 04:00:00', '', '', 1, '', '2019-09-27 04:00:00', '2019-09-27 04:00:00');


--
-- TOC entry 3189 (class 0 OID 49678)
-- Dependencies: 261
-- Data for Name: tbl_userlanguage; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.tbl_userlanguage (usla_ide, usla_user, usla_lang) VALUES (1, 5, 1);


--
-- TOC entry 3193 (class 0 OID 49690)
-- Dependencies: 265
-- Data for Name: tbl_usersocial; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.tbl_usersocial (usso_ide, usso_user, usso_social, usso_url) VALUES (1, 5, 1, 'www.facebook.com');


--
-- TOC entry 3195 (class 0 OID 49698)
-- Dependencies: 267
-- Data for Name: tbl_usertype; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.tbl_usertype (usty_ide, usty_description, usty_status) VALUES (1, 'influencer2', '1');
INSERT INTO public.tbl_usertype (usty_ide, usty_description, usty_status) VALUES (2, 'influencer25', '1');
INSERT INTO public.tbl_usertype (usty_ide, usty_description, usty_status) VALUES (3, 'influencer80', '1');
INSERT INTO public.tbl_usertype (usty_ide, usty_description, usty_status) VALUES (4, 'view', '1');


--
-- TOC entry 3198 (class 0 OID 49706)
-- Dependencies: 270
-- Data for Name: tbl_video; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.tbl_video (vide_ide, vide_description, vide_dtcreation, vide_actu, vide_url) VALUES (1, 'video25', '2019-11-09 04:00:00', 1, 'www.video.com');


--
-- TOC entry 3256 (class 0 OID 0)
-- Dependencies: 196
-- Name: tbl_access_acce_ide_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_access_acce_ide_seq', 40, true);


--
-- TOC entry 3257 (class 0 OID 0)
-- Dependencies: 197
-- Name: tbl_access_acce_user_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_access_acce_user_seq', 9, true);


--
-- TOC entry 3258 (class 0 OID 0)
-- Dependencies: 200
-- Name: tbl_accesstypeuser_actu_acce_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_accesstypeuser_actu_acce_seq', 1, false);


--
-- TOC entry 3259 (class 0 OID 0)
-- Dependencies: 199
-- Name: tbl_accesstypeuser_actu_ide_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_accesstypeuser_actu_ide_seq', 7, true);


--
-- TOC entry 3260 (class 0 OID 0)
-- Dependencies: 202
-- Name: tbl_accesstypeuser_actu_spec_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_accesstypeuser_actu_spec_seq', 1, false);


--
-- TOC entry 3261 (class 0 OID 0)
-- Dependencies: 201
-- Name: tbl_accesstypeuser_actu_usty_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_accesstypeuser_actu_usty_seq', 1, false);


--
-- TOC entry 3262 (class 0 OID 0)
-- Dependencies: 204
-- Name: tbl_category_cate_ide_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_category_cate_ide_seq', 9, true);


--
-- TOC entry 3263 (class 0 OID 0)
-- Dependencies: 206
-- Name: tbl_city_city_ide_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_city_city_ide_seq', 5, true);


--
-- TOC entry 3264 (class 0 OID 0)
-- Dependencies: 207
-- Name: tbl_city_city_prov_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_city_city_prov_seq', 1, false);


--
-- TOC entry 3265 (class 0 OID 0)
-- Dependencies: 209
-- Name: tbl_codepromotion_copr_ide_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_codepromotion_copr_ide_seq', 1, true);


--
-- TOC entry 3266 (class 0 OID 0)
-- Dependencies: 211
-- Name: tbl_country_coun_ide_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_country_coun_ide_seq', 3, true);


--
-- TOC entry 3267 (class 0 OID 0)
-- Dependencies: 213
-- Name: tbl_language_lang_ide_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_language_lang_ide_seq', 2, true);


--
-- TOC entry 3268 (class 0 OID 0)
-- Dependencies: 217
-- Name: tbl_liveevents_live_actu_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_liveevents_live_actu_seq', 1, false);


--
-- TOC entry 3269 (class 0 OID 0)
-- Dependencies: 215
-- Name: tbl_liveevents_live_ide_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_liveevents_live_ide_seq', 5, true);


--
-- TOC entry 3270 (class 0 OID 0)
-- Dependencies: 218
-- Name: tbl_liveevents_live_request_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_liveevents_live_request_seq', 1, false);


--
-- TOC entry 3271 (class 0 OID 0)
-- Dependencies: 216
-- Name: tbl_liveevents_live_video_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_liveevents_live_video_seq', 1, true);


--
-- TOC entry 3272 (class 0 OID 0)
-- Dependencies: 220
-- Name: tbl_module_modu_ide_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_module_modu_ide_seq', 3, true);


--
-- TOC entry 3273 (class 0 OID 0)
-- Dependencies: 222
-- Name: tbl_pemissioncrud_pecr_ide_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_pemissioncrud_pecr_ide_seq', 38, true);


--
-- TOC entry 3274 (class 0 OID 0)
-- Dependencies: 225
-- Name: tbl_permission_perm_actu_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_permission_perm_actu_seq', 1, false);


--
-- TOC entry 3275 (class 0 OID 0)
-- Dependencies: 224
-- Name: tbl_permission_perm_ide_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_permission_perm_ide_seq', 3, true);


--
-- TOC entry 3276 (class 0 OID 0)
-- Dependencies: 227
-- Name: tbl_permission_perm_pecr_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_permission_perm_pecr_seq', 1, false);


--
-- TOC entry 3277 (class 0 OID 0)
-- Dependencies: 226
-- Name: tbl_permission_perm_sumo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_permission_perm_sumo_seq', 1, false);


--
-- TOC entry 3278 (class 0 OID 0)
-- Dependencies: 230
-- Name: tbl_province_prov_country_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_province_prov_country_seq', 1, false);


--
-- TOC entry 3279 (class 0 OID 0)
-- Dependencies: 229
-- Name: tbl_province_prov_ide_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_province_prov_ide_seq', 2, true);


--
-- TOC entry 3280 (class 0 OID 0)
-- Dependencies: 234
-- Name: tbl_rating_rati_actu_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_rating_rati_actu_seq', 2, true);


--
-- TOC entry 3281 (class 0 OID 0)
-- Dependencies: 232
-- Name: tbl_rating_rati_ide_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_rating_rati_ide_seq', 2, true);


--
-- TOC entry 3282 (class 0 OID 0)
-- Dependencies: 233
-- Name: tbl_rating_rati_video_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_rating_rati_video_seq', 1, false);


--
-- TOC entry 3283 (class 0 OID 0)
-- Dependencies: 237
-- Name: tbl_request_requ_emisor_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_request_requ_emisor_seq', 1, false);


--
-- TOC entry 3284 (class 0 OID 0)
-- Dependencies: 236
-- Name: tbl_request_requ_ide_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_request_requ_ide_seq', 12, true);


--
-- TOC entry 3285 (class 0 OID 0)
-- Dependencies: 238
-- Name: tbl_request_requ_receptor_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_request_requ_receptor_seq', 1, false);


--
-- TOC entry 3286 (class 0 OID 0)
-- Dependencies: 240
-- Name: tbl_social_soci_ide_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_social_soci_ide_seq', 1, true);


--
-- TOC entry 3287 (class 0 OID 0)
-- Dependencies: 242
-- Name: tbl_specialities_spec_ide_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_specialities_spec_ide_seq', 2, true);


--
-- TOC entry 3288 (class 0 OID 0)
-- Dependencies: 243
-- Name: tbl_specialities_spec_suca_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_specialities_spec_suca_seq', 1, false);


--
-- TOC entry 3289 (class 0 OID 0)
-- Dependencies: 246
-- Name: tbl_subcategory_suca_cate_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_subcategory_suca_cate_seq', 1, false);


--
-- TOC entry 3290 (class 0 OID 0)
-- Dependencies: 245
-- Name: tbl_subcategory_suca_ide_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_subcategory_suca_ide_seq', 3, true);


--
-- TOC entry 3291 (class 0 OID 0)
-- Dependencies: 248
-- Name: tbl_submodule_sumo_ide_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_submodule_sumo_ide_seq', 4, true);


--
-- TOC entry 3292 (class 0 OID 0)
-- Dependencies: 249
-- Name: tbl_submodule_sumo_modu_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_submodule_sumo_modu_seq', 1, true);


--
-- TOC entry 3293 (class 0 OID 0)
-- Dependencies: 253
-- Name: tbl_ticket_tick_cupon_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_ticket_tick_cupon_seq', 1, false);


--
-- TOC entry 3294 (class 0 OID 0)
-- Dependencies: 251
-- Name: tbl_ticket_tick_ide_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_ticket_tick_ide_seq', 1, true);


--
-- TOC entry 3295 (class 0 OID 0)
-- Dependencies: 252
-- Name: tbl_ticket_tick_liveevents_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_ticket_tick_liveevents_seq', 1, true);


--
-- TOC entry 3296 (class 0 OID 0)
-- Dependencies: 256
-- Name: tbl_user_user_city_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_user_user_city_seq', 5, true);


--
-- TOC entry 3297 (class 0 OID 0)
-- Dependencies: 255
-- Name: tbl_user_user_ide_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_user_user_ide_seq', 37, true);


--
-- TOC entry 3298 (class 0 OID 0)
-- Dependencies: 258
-- Name: tbl_userlanguage_usla_ide_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_userlanguage_usla_ide_seq', 1, true);


--
-- TOC entry 3299 (class 0 OID 0)
-- Dependencies: 260
-- Name: tbl_userlanguage_usla_lang_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_userlanguage_usla_lang_seq', 1, false);


--
-- TOC entry 3300 (class 0 OID 0)
-- Dependencies: 259
-- Name: tbl_userlanguage_usla_user_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_userlanguage_usla_user_seq', 1, false);


--
-- TOC entry 3301 (class 0 OID 0)
-- Dependencies: 262
-- Name: tbl_usersocial_usso_ide_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_usersocial_usso_ide_seq', 1, true);


--
-- TOC entry 3302 (class 0 OID 0)
-- Dependencies: 264
-- Name: tbl_usersocial_usso_social_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_usersocial_usso_social_seq', 1, true);


--
-- TOC entry 3303 (class 0 OID 0)
-- Dependencies: 263
-- Name: tbl_usersocial_usso_user_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_usersocial_usso_user_seq', 1, false);


--
-- TOC entry 3304 (class 0 OID 0)
-- Dependencies: 266
-- Name: tbl_usertype_usty_ide_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_usertype_usty_ide_seq', 4, true);


--
-- TOC entry 3305 (class 0 OID 0)
-- Dependencies: 269
-- Name: tbl_video_vide_actu_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_video_vide_actu_seq', 1, true);


--
-- TOC entry 3306 (class 0 OID 0)
-- Dependencies: 268
-- Name: tbl_video_vide_ide_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_video_vide_ide_seq', 1, true);


-- Completed on 2019-10-01 09:23:33

--
-- PostgreSQL database dump complete
--

