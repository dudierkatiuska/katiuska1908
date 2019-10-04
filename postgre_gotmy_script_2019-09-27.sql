--
-- PostgreSQL database dump
--

SET statement_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = off;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET escape_string_warning = off;

SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: tbl_access; Type: TABLE; Schema: public; 
--

CREATE TABLE tbl_access (
    acce_ide serial NOT NULL,
    acce_nick character varying(60) NOT NULL,
    acce_password character varying(30) NOT NULL,
    acce_user serial NOT NULL,
    acce_moderator character(1) NOT NULL,
    acce_status character(1) NOT NULL
);


--
-- Name: TABLE tbl_access; Type: COMMENT; Schema: public;
--

COMMENT ON TABLE tbl_access IS 'tabla de acceso';


--
-- Name: COLUMN tbl_access.acce_ide; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_access.acce_ide IS 'pk autoincremental del acceso del usuario';


--
-- Name: COLUMN tbl_access.acce_nick; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_access.acce_nick IS 'nick del usuario';


--
-- Name: COLUMN tbl_access.acce_password; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_access.acce_password IS 'contraseña del usuario';


--
-- Name: COLUMN tbl_access.acce_user; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_access.acce_user IS 'fk relacion entre acceso y usuario';


--
-- Name: COLUMN tbl_access.acce_moderator; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_access.acce_moderator IS 'booleano para activar usuario como moderador';


--
-- Name: COLUMN tbl_access.acce_status; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_access.acce_status IS 'estatus del acceso del usuario (Activo / Inactivo)';


--
-- Name: tbl_accesstypeuser; Type: TABLE; Schema: public; 
--

CREATE TABLE tbl_accesstypeuser (
    actu_ide serial NOT NULL,
    actu_acce serial NOT NULL,
    actu_usty serial NOT NULL,
    actu_spec serial NOT NULL
);


--
-- Name: TABLE tbl_accesstypeuser; Type: COMMENT; Schema: public;
--

COMMENT ON TABLE tbl_accesstypeuser IS 'tabla de relacion  acceso con  el  tipo de usuaio';


--
-- Name: COLUMN tbl_accesstypeuser.actu_ide; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_accesstypeuser.actu_ide IS 'pk autoincremental del acceso del tipo de usuario';


--
-- Name: COLUMN tbl_accesstypeuser.actu_acce; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_accesstypeuser.actu_acce IS 'fk autoincremental del acceso';


--
-- Name: COLUMN tbl_accesstypeuser.actu_usty; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_accesstypeuser.actu_usty IS ' fk autoincremental de tipo de ususario';


--
-- Name: COLUMN tbl_accesstypeuser.actu_spec; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_accesstypeuser.actu_spec IS 'fk autoincremental de las especialidades del influencer';


--
-- Name: tbl_category; Type: TABLE; Schema: public; 
--

CREATE TABLE tbl_category (
    cate_ide serial NOT NULL,
    cate_description character varying(60) NOT NULL,
    cate_status character(1) NOT NULL
);


--
-- Name: TABLE tbl_category; Type: COMMENT; Schema: public;
--

COMMENT ON TABLE tbl_category IS 'tabla de la categoria del influencer

';


--
-- Name: COLUMN tbl_category.cate_ide; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_category.cate_ide IS 'pk autoincremental de categoria del influencer';


--
-- Name: COLUMN tbl_category.cate_description; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_category.cate_description IS 'descripcion de la categoria del influencer';


--
-- Name: COLUMN tbl_category.cate_status; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_category.cate_status IS 'estatus de la categoria del ifluencer (Activo / Inactivo)';


--
-- Name: tbl_city; Type: TABLE; Schema: public; 
--

CREATE TABLE tbl_city (
    city_ide serial NOT NULL,
    city_description character varying(60) NOT NULL,
    city_capital character(1) NOT NULL,
    city_zipcode character(6) NOT NULL,
    city_prov serial NOT NULL,
    city_status character(1) NOT NULL
);


--
-- Name: TABLE tbl_city; Type: COMMENT; Schema: public;
--

COMMENT ON TABLE tbl_city IS 'tabla de ciudades';


--
-- Name: COLUMN tbl_city.city_ide; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_city.city_ide IS 'pk autoincremental de la ciudad';


--
-- Name: COLUMN tbl_city.city_description; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_city.city_description IS 'descripcion de la ciudad';


--
-- Name: COLUMN tbl_city.city_capital; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_city.city_capital IS 'estatus de la ciudad si es una capital o no (1 / 0)';


--
-- Name: COLUMN tbl_city.city_zipcode; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_city.city_zipcode IS 'codigo postal de la ciudad';


--
-- Name: COLUMN tbl_city.city_prov; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_city.city_prov IS 'fk autoincremental de la provincia';


--
-- Name: COLUMN tbl_city.city_status; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_city.city_status IS 'estatus de la ciudad (Activo / Inactivo)';


--
-- Name: tbl_codepromotion; Type: TABLE; Schema: public; 
--

CREATE TABLE tbl_codepromotion (
    copr_ide serial NOT NULL,
    copr_description character varying(60) NOT NULL,
    copr_ticket character varying(60) NOT NULL
);


--
-- Name: TABLE tbl_codepromotion; Type: COMMENT; Schema: public;
--

COMMENT ON TABLE tbl_codepromotion IS 'tabla de codigo de promocion';


--
-- Name: COLUMN tbl_codepromotion.copr_description; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_codepromotion.copr_description IS 'descripcion del ticket';


--
-- Name: COLUMN tbl_codepromotion.copr_ticket; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_codepromotion.copr_ticket IS 'valor cupon promocion del ticke';


--
-- Name: COLUMN tbl_codepromotion.copr_ide; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_codepromotion.copr_ide IS 'pk autoincremental del codigo de promocion';


--
-- Name: tbl_country; Type: TABLE; Schema: public; 
--

CREATE TABLE tbl_country (
    coun_ide serial NOT NULL,
    coun_iso23366 character(2) NOT NULL,
    coun_description character varying(60) NOT NULL,
    coun_icon character varying(10) NOT NULL,
    coun_prefixphone character(6) NOT NULL,
    coun_status character(1) NOT NULL
);


--
-- Name: TABLE tbl_country; Type: COMMENT; Schema: public;
--

COMMENT ON TABLE tbl_country IS 'tabla de la pais';


--
-- Name: COLUMN tbl_country.coun_ide; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_country.coun_ide IS 'pk autoincremental del pais';


--
-- Name: COLUMN tbl_country.coun_iso23366; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_country.coun_iso23366 IS 'codigo abreviacion del pais';


--
-- Name: COLUMN tbl_country.coun_description; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_country.coun_description IS 'descripcion del pais';


--
-- Name: COLUMN tbl_country.coun_icon; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_country.coun_icon IS 'icon de la bandera de pais';


--
-- Name: COLUMN tbl_country.coun_prefixphone; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_country.coun_prefixphone IS 'prefijo telefonico del pais';


--
-- Name: tbl_language; Type: TABLE; Schema: public; 
--

CREATE TABLE tbl_language (
    lang_ide serial NOT NULL,
    lang_description character varying(60),
    lang_status character(1)
);


--
-- Name: TABLE tbl_language; Type: COMMENT; Schema: public;
--

COMMENT ON TABLE tbl_language IS 'Tabla de Idiomas';


--
-- Name: COLUMN tbl_language.lang_ide; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_language.lang_ide IS 'pk autoincremental del idioma';


--
-- Name: COLUMN tbl_language.lang_description; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_language.lang_description IS 'descripcion del idioma';


--
-- Name: COLUMN tbl_language.lang_status; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_language.lang_status IS 'estatus del idioma (Activo / Inactivo)';


--
-- Name: tbl_liveevents; Type: TABLE; Schema: public; 
--

CREATE TABLE tbl_liveevents (
    live_ide serial NOT NULL,
    live_description character varying(60) NOT NULL,
    live_dtcreation timestamp(6) without time zone NOT NULL,
    live_video serial NOT NULL,
    live_actu serial NOT NULL,
    live_participants smallint NOT NULL,
    live_request serial NOT NULL
);


--
-- Name: TABLE tbl_liveevents; Type: COMMENT; Schema: public;
--

COMMENT ON TABLE tbl_liveevents IS 'tabal de eventos en vivo';


--
-- Name: COLUMN tbl_liveevents.live_ide; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_liveevents.live_ide IS 'pk autoincremental de los eventos en vivo';


--
-- Name: COLUMN tbl_liveevents.live_description; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_liveevents.live_description IS 'descripcion del evento';


--
-- Name: COLUMN tbl_liveevents.live_dtcreation; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_liveevents.live_dtcreation IS 'fecha en que se creo el evento';


--
-- Name: COLUMN tbl_liveevents.live_video; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_liveevents.live_video IS 'fk autoincremental del video';


--
-- Name: COLUMN tbl_liveevents.live_actu; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_liveevents.live_actu IS 'fk autoincremental del acceso tipo de usuario';


--
-- Name: COLUMN tbl_liveevents.live_participants; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_liveevents.live_participants IS 'cantidad de paricipante';


--
-- Name: COLUMN tbl_liveevents.live_request; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_liveevents.live_request IS 'fk autoincremental de la solicitud';


--
-- Name: tbl_module; Type: TABLE; Schema: public; 
--

CREATE TABLE tbl_module (
    modu_ide serial NOT NULL,
    modu_description character varying(60) NOT NULL,
    modu_visibility smallint NOT NULL,
    modu_icon character varying(100) NOT NULL
);


--
-- Name: TABLE tbl_module; Type: COMMENT; Schema: public;
--

COMMENT ON TABLE tbl_module IS 'tabla de modulo';


--
-- Name: COLUMN tbl_module.modu_ide; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_module.modu_ide IS 'pk autoincremental del modulo';


--
-- Name: COLUMN tbl_module.modu_description; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_module.modu_description IS 'descripcion del modulo';


--
-- Name: COLUMN tbl_module.modu_visibility; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_module.modu_visibility IS 'fk del acceso al submodulo';


--
-- Name: COLUMN tbl_module.modu_icon; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_module.modu_icon IS 'icon del submodulo';


--
-- Name: tbl_pemissioncrud; Type: TABLE; Schema: public; 
--

CREATE TABLE tbl_pemissioncrud (
    pecr_ide serial NOT NULL,
    pecr_description character varying(60) NOT NULL,
    pecr_url character varying(100) NOT NULL,
    pecr_icon character varying(255) NOT NULL
);


--
-- Name: TABLE tbl_pemissioncrud; Type: COMMENT; Schema: public;
--

COMMENT ON TABLE tbl_pemissioncrud IS 'tabla de permiso CRUD';


--
-- Name: COLUMN tbl_pemissioncrud.pecr_ide; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_pemissioncrud.pecr_ide IS 'pk autoincremental del permiso para el crud';


--
-- Name: COLUMN tbl_pemissioncrud.pecr_description; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_pemissioncrud.pecr_description IS 'descripcion del crud';


--
-- Name: COLUMN tbl_pemissioncrud.pecr_url; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_pemissioncrud.pecr_url IS 'url del crud';


--
-- Name: tbl_permission; Type: TABLE; Schema: public; 
--

CREATE TABLE tbl_permission (
    perm_ide serial NOT NULL,
    perm_actu serial NOT NULL,
    perm_sumo serial NOT NULL,
    perm_pecr serial NOT NULL,
    perm_status character(1) NOT NULL
);


--
-- Name: TABLE tbl_permission; Type: COMMENT; Schema: public;
--

COMMENT ON TABLE tbl_permission IS 'Tabla de Permisos a Usuarios';


--
-- Name: COLUMN tbl_permission.perm_ide; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_permission.perm_ide IS 'pk autoincremental del permiso de usuario';


--
-- Name: COLUMN tbl_permission.perm_actu; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_permission.perm_actu IS 'fk del acceso tipo de usuario';


--
-- Name: COLUMN tbl_permission.perm_sumo; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_permission.perm_sumo IS 'fk del permiso  submodulo';


--
-- Name: COLUMN tbl_permission.perm_pecr; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_permission.perm_pecr IS 'fk del permiso crud';


--
-- Name: COLUMN tbl_permission.perm_status; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_permission.perm_status IS 'estatus del permiso de usuario (Activo / Inactivo)';


--
-- Name: tbl_province; Type: TABLE; Schema: public; 
--

CREATE TABLE tbl_province (
    prov_ide serial NOT NULL,
    prov_iso233661 character(5) NOT NULL,
    prov_description character varying(60) NOT NULL,
    prov_country serial NOT NULL,
    prov_status character(1) NOT NULL
);


--
-- Name: TABLE tbl_province; Type: COMMENT; Schema: public;
--

COMMENT ON TABLE tbl_province IS 'tabla de provincia';


--
-- Name: COLUMN tbl_province.prov_ide; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_province.prov_ide IS 'pk autoincremental de la provincia o estado';


--
-- Name: COLUMN tbl_province.prov_iso233661; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_province.prov_iso233661 IS 'codigo abreviacion de la provincia';


--
-- Name: COLUMN tbl_province.prov_description; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_province.prov_description IS 'descripcion del provincia o estado';


--
-- Name: COLUMN tbl_province.prov_country; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_province.prov_country IS 'fk autoincremental del pais';


--
-- Name: COLUMN tbl_province.prov_status; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_province.prov_status IS 'estatus de la provincia o estado (Activo / Inactivo)';


--
-- Name: tbl_rating; Type: TABLE; Schema: public; 
--

CREATE TABLE tbl_rating (
    rati_ide serial NOT NULL,
    rati_valor character varying(60) NOT NULL,
    rati_video serial NOT NULL,
    rati_actu serial NOT NULL,
    rati_dtcreation timestamp(6) without time zone NOT NULL
);


--
-- Name: TABLE tbl_rating; Type: COMMENT; Schema: public;
--

COMMENT ON TABLE tbl_rating IS 'tabla de rating';


--
-- Name: COLUMN tbl_rating.rati_ide; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_rating.rati_ide IS 'pk autoincremental de la valoracion del video';


--
-- Name: COLUMN tbl_rating.rati_valor; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_rating.rati_valor IS 'valor del video';


--
-- Name: COLUMN tbl_rating.rati_video; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_rating.rati_video IS 'fk autoincremental del video';


--
-- Name: COLUMN tbl_rating.rati_actu; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_rating.rati_actu IS 'fk autoincremental del acceso del tipo de usuario';


--
-- Name: COLUMN tbl_rating.rati_dtcreation; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_rating.rati_dtcreation IS 'fecha de la valoracion del video';


--
-- Name: tbl_request; Type: TABLE; Schema: public; 
--

CREATE TABLE tbl_request (
    requ_ide serial NOT NULL,
    requ_description character varying(60) NOT NULL,
    requ_dtcreation timestamp(6) without time zone NOT NULL,
    requ_message character varying(60) NOT NULL,
    requ_emisor serial NOT NULL,
    requ_receptor serial NOT NULL
);


--
-- Name: TABLE tbl_request; Type: COMMENT; Schema: public;
--

COMMENT ON TABLE tbl_request IS 'tabla  Solicitudes';


--
-- Name: COLUMN tbl_request.requ_ide; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_request.requ_ide IS 'pk autoincremental del  Solicitudes';


--
-- Name: COLUMN tbl_request.requ_description; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_request.requ_description IS 'descricion del  Solicitudes';


--
-- Name: COLUMN tbl_request.requ_dtcreation; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_request.requ_dtcreation IS 'fecha del  Solicitudes';


--
-- Name: COLUMN tbl_request.requ_message; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_request.requ_message IS 'message del  Solicitudes';


--
-- Name: COLUMN tbl_request.requ_emisor; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_request.requ_emisor IS 'fk autoincremental usuario quien emite la solicitud';


--
-- Name: COLUMN tbl_request.requ_receptor; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_request.requ_receptor IS 'fk autoincremental usuario quien recibe la solicitud';


--
-- Name: tbl_social; Type: TABLE; Schema: public; 
--

CREATE TABLE tbl_social (
    soci_ide serial NOT NULL,
    soci_description character varying(60) NOT NULL,
    soci_icon character varying(255) NOT NULL
);


--
-- Name: TABLE tbl_social; Type: COMMENT; Schema: public;
--

COMMENT ON TABLE tbl_social IS 'tabla de redes sociales';


--
-- Name: COLUMN tbl_social.soci_ide; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_social.soci_ide IS 'pk autoincremental de la red social';


--
-- Name: COLUMN tbl_social.soci_description; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_social.soci_description IS 'descripcion de la red social';


--
-- Name: tbl_specialities; Type: TABLE; Schema: public; 
--

CREATE TABLE tbl_specialities (
    spec_ide serial NOT NULL,
    spec_description character varying(60) NOT NULL,
    spec_suca serial NOT NULL,
    spec_status character(1) NOT NULL
);


--
-- Name: TABLE tbl_specialities; Type: COMMENT; Schema: public;
--

COMMENT ON TABLE tbl_specialities IS 'tabla de especialidades del influencer';


--
-- Name: COLUMN tbl_specialities.spec_ide; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_specialities.spec_ide IS 'pk autoincremental especialidades del influencer';


--
-- Name: COLUMN tbl_specialities.spec_description; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_specialities.spec_description IS 'descripcion de especialidades del influencer';


--
-- Name: COLUMN tbl_specialities.spec_suca; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_specialities.spec_suca IS 'fk autoincremental de sub categoria del influencer';


--
-- Name: COLUMN tbl_specialities.spec_status; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_specialities.spec_status IS 'estatus de la especialidad del ifluencer (Activo / Inactivo)';


--
-- Name: tbl_subcategory; Type: TABLE; Schema: public; 
--

CREATE TABLE tbl_subcategory (
    suca_ide serial NOT NULL,
    suca_description character varying(60) NOT NULL,
    suca_cate serial NOT NULL,
    suca_status character(1) NOT NULL
);


--
-- Name: TABLE tbl_subcategory; Type: COMMENT; Schema: public;
--

COMMENT ON TABLE tbl_subcategory IS 'tabla de la subcategoria del influencer';


--
-- Name: COLUMN tbl_subcategory.suca_ide; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_subcategory.suca_ide IS 'pk autoincremental de la sub categoria del influencer';


--
-- Name: COLUMN tbl_subcategory.suca_description; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_subcategory.suca_description IS 'descripcion de la sub categoria del influencer';


--
-- Name: COLUMN tbl_subcategory.suca_cate; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_subcategory.suca_cate IS 'fk autoincremental de la categoria del influencer';


--
-- Name: COLUMN tbl_subcategory.suca_status; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_subcategory.suca_status IS 'estatus de la sub-categoria del ifluencer (Activo / Inactivo)';


--
-- Name: tbl_submodule; Type: TABLE; Schema: public; 
--

CREATE TABLE tbl_submodule (
    sumo_ide serial NOT NULL,
    sumo_description character varying(60) NOT NULL,
    sumo_url character varying(100) NOT NULL,
    sumo_icon character varying(100) NOT NULL,
    sumo_order smallint NOT NULL,
    sumo_modu serial NOT NULL
);


--
-- Name: TABLE tbl_submodule; Type: COMMENT; Schema: public;
--

COMMENT ON TABLE tbl_submodule IS 'tabla de submodulo';


--
-- Name: COLUMN tbl_submodule.sumo_ide; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_submodule.sumo_ide IS 'pk autoincremental del submodulo';


--
-- Name: COLUMN tbl_submodule.sumo_description; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_submodule.sumo_description IS 'descripcion del submodulo';


--
-- Name: COLUMN tbl_submodule.sumo_url; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_submodule.sumo_url IS 'url del submodulo';


--
-- Name: COLUMN tbl_submodule.sumo_icon; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_submodule.sumo_icon IS 'icon del submodulo';


--
-- Name: COLUMN tbl_submodule.sumo_order; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_submodule.sumo_order IS 'orden del submodulo';


--
-- Name: COLUMN tbl_submodule.sumo_modu; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_submodule.sumo_modu IS 'fk autoincremental del modulo';


--
-- Name: tbl_ticket; Type: TABLE; Schema: public; 
--

CREATE TABLE tbl_ticket (
    tick_ide serial NOT NULL,
    tick_description character varying(60) NOT NULL,
    tick_dtcreation timestamp(6) without time zone NOT NULL,
    tick_liveevents serial NOT NULL,
    tick_valor character varying(60) NOT NULL,
    tick_cupon serial NOT NULL
);


--
-- Name: TABLE tbl_ticket; Type: COMMENT; Schema: public;
--

COMMENT ON TABLE tbl_ticket IS 'tabla de ticket';


--
-- Name: COLUMN tbl_ticket.tick_ide; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_ticket.tick_ide IS 'pk autoincremental del ticket asociado a un evento';


--
-- Name: COLUMN tbl_ticket.tick_description; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_ticket.tick_description IS 'descripcion del ticket';


--
-- Name: COLUMN tbl_ticket.tick_dtcreation; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_ticket.tick_dtcreation IS 'fecha en que se creo ticket';


--
-- Name: COLUMN tbl_ticket.tick_liveevents; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_ticket.tick_liveevents IS 'fk autoincremental del evento en vivo';


--
-- Name: COLUMN tbl_ticket.tick_valor; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_ticket.tick_valor IS 'valor del ticket';


--
-- Name: COLUMN tbl_ticket.tick_cupon; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_ticket.tick_cupon IS 'fk autoincremental de codigo de cupon';


--
-- Name: tbl_user; Type: TABLE; Schema: public; 
--

CREATE TABLE tbl_user (
    user_ide serial NOT NULL,
    user_name character varying(60),
    user_lastname character varying(60),
    user_email character varying(60),
    user_birthdate timestamp(6) without time zone,
    user_aboutme text,
    user_avatar character varying(100),
    user_city serial,
    user_mobile character varying(15),
    user_dtregister timestamp(6) without time zone,
    user_dtactivation timestamp(6) without time zone
);


--
-- Name: TABLE tbl_user; Type: COMMENT; Schema: public;
--

COMMENT ON TABLE tbl_user IS 'tabla de usuario';


--
-- Name: COLUMN tbl_user.user_ide; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_user.user_ide IS 'pk autoincremental del usuario';


--
-- Name: COLUMN tbl_user.user_name; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_user.user_name IS 'pk autoincremental del usuario';


--
-- Name: COLUMN tbl_user.user_lastname; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_user.user_lastname IS 'apellidos completos del usuario';


--
-- Name: COLUMN tbl_user.user_email; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_user.user_email IS 'email del usuario';


--
-- Name: COLUMN tbl_user.user_birthdate; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_user.user_birthdate IS 'fecha de nacimiento  del usuario';


--
-- Name: COLUMN tbl_user.user_aboutme; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_user.user_aboutme IS 'pequeño resumen acerca del usuario';


--
-- Name: COLUMN tbl_user.user_avatar; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_user.user_avatar IS 'url del  avatar del usuario';


--
-- Name: COLUMN tbl_user.user_city; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_user.user_city IS 'fk autoincremental del provincia del usuario';


--
-- Name: COLUMN tbl_user.user_mobile; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_user.user_mobile IS 'telefono celular del usuario';


--
-- Name: COLUMN tbl_user.user_dtregister; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_user.user_dtregister IS 'fecha en que se registro el usuario';


--
-- Name: COLUMN tbl_user.user_dtactivation; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_user.user_dtactivation IS 'fecha de activacion el usuario';


--
-- Name: tbl_userlanguage; Type: TABLE; Schema: public; 
--

CREATE TABLE tbl_userlanguage (
    usla_ide serial NOT NULL,
    usla_user serial NOT NULL,
    usla_lang serial NOT NULL
);


--
-- Name: TABLE tbl_userlanguage; Type: COMMENT; Schema: public;
--

COMMENT ON TABLE tbl_userlanguage IS 'tabla de relacion de usuario con idiomas';


--
-- Name: COLUMN tbl_userlanguage.usla_ide; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_userlanguage.usla_ide IS 'pk autoincremental del idioma del usuario';


--
-- Name: COLUMN tbl_userlanguage.usla_user; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_userlanguage.usla_user IS 'fk autoincremental del usuario';


--
-- Name: COLUMN tbl_userlanguage.usla_lang; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_userlanguage.usla_lang IS 'fk autoincremental del idioma';


--
-- Name: tbl_usersocial; Type: TABLE; Schema: public; 
--

CREATE TABLE tbl_usersocial (
    usso_ide serial NOT NULL,
    usso_user serial NOT NULL,
    usso_social serial NOT NULL,
    usso_url character varying(100) NOT NULL
);


--
-- Name: TABLE tbl_usersocial; Type: COMMENT; Schema: public;
--

COMMENT ON TABLE tbl_usersocial IS 'tabla de relacion del usuario con la red social';


--
-- Name: COLUMN tbl_usersocial.usso_ide; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_usersocial.usso_ide IS 'pk autoincremental de la red social del usuario';


--
-- Name: COLUMN tbl_usersocial.usso_user; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_usersocial.usso_user IS 'fk autoincremental del usuario';


--
-- Name: COLUMN tbl_usersocial.usso_social; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_usersocial.usso_social IS 'fk autoincremental de la red social del usuario';


--
-- Name: COLUMN tbl_usersocial.usso_url; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_usersocial.usso_url IS 'url de la red social';


--
-- Name: tbl_usertype; Type: TABLE; Schema: public; 
--

CREATE TABLE tbl_usertype (
    usty_ide serial NOT NULL,
    usty_description character varying(60) NOT NULL,
    usty_status character(1) NOT NULL
);


--
-- Name: TABLE tbl_usertype; Type: COMMENT; Schema: public;
--

COMMENT ON TABLE tbl_usertype IS 'tabla tipo de usuario';


--
-- Name: COLUMN tbl_usertype.usty_ide; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_usertype.usty_ide IS 'pk autoincremental del tipo de usuario';


--
-- Name: COLUMN tbl_usertype.usty_description; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_usertype.usty_description IS 'descripcion del tipo de usuario';


--
-- Name: COLUMN tbl_usertype.usty_status; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_usertype.usty_status IS 'estatus del tipo de usuario (Activo / Inactivo)';


--
-- Name: tbl_video; Type: TABLE; Schema: public; 
--

CREATE TABLE tbl_video (
    vide_ide serial NOT NULL,
    vide_description character varying(60) NOT NULL,
    vide_dtcreation timestamp(6) without time zone NOT NULL,
    vide_actu serial NOT NULL,
    vide_url character varying(11) NOT NULL
);


--
-- Name: TABLE tbl_video; Type: COMMENT; Schema: public;
--

COMMENT ON TABLE tbl_video IS 'Tabla de Video';


--
-- Name: COLUMN tbl_video.vide_ide; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_video.vide_ide IS 'pk autoincremental del video';


--
-- Name: COLUMN tbl_video.vide_description; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_video.vide_description IS 'descripcion del video';


--
-- Name: COLUMN tbl_video.vide_dtcreation; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_video.vide_dtcreation IS 'fecha en que creo el video';


--
-- Name: COLUMN tbl_video.vide_actu; Type: COMMENT; Schema: public;
--

COMMENT ON COLUMN tbl_video.vide_actu IS 'fk autoincremental del acceso del tipo de usuario';


--
-- Name:  tbl_access_pkey; Type: CONSTRAINT; Schema: public; 
--

ALTER TABLE ONLY tbl_access
    ADD CONSTRAINT " tbl_access_pkey" PRIMARY KEY (acce_ide);


--
-- Name:  tbl_accesstypeuser_pkey; Type: CONSTRAINT; Schema: public; 
--

ALTER TABLE ONLY tbl_accesstypeuser
    ADD CONSTRAINT " tbl_accesstypeuser_pkey" PRIMARY KEY (actu_ide);


--
-- Name:  tbl_codepromotion_pkey; Type: CONSTRAINT; Schema: public; 
--

ALTER TABLE ONLY tbl_codepromotion
    ADD CONSTRAINT " tbl_codepromotion_pkey" PRIMARY KEY (copr_ide);


--
-- Name:  tbl_language_pkey; Type: CONSTRAINT; Schema: public; 
--

ALTER TABLE ONLY tbl_language
    ADD CONSTRAINT " tbl_language_pkey" PRIMARY KEY (lang_ide);


--
-- Name:  tbl_module_pkey; Type: CONSTRAINT; Schema: public; 
--

ALTER TABLE ONLY tbl_module
    ADD CONSTRAINT " tbl_module_pkey" PRIMARY KEY (modu_ide);


--
-- Name:  tbl_permission_pkey; Type: CONSTRAINT; Schema: public; 
--

ALTER TABLE ONLY tbl_permission
    ADD CONSTRAINT " tbl_permission_pkey" PRIMARY KEY (perm_ide);


--
-- Name:  tbl_request_pkey; Type: CONSTRAINT; Schema: public; 
--

ALTER TABLE ONLY tbl_request
    ADD CONSTRAINT " tbl_request_pkey" PRIMARY KEY (requ_ide);


--
-- Name:  tbl_submodule_pkey; Type: CONSTRAINT; Schema: public; 
--

ALTER TABLE ONLY tbl_submodule
    ADD CONSTRAINT " tbl_submodule_pkey" PRIMARY KEY (sumo_ide);


--
-- Name:  tbl_usersocial_pkey; Type: CONSTRAINT; Schema: public; 
--

ALTER TABLE ONLY tbl_usersocial
    ADD CONSTRAINT " tbl_usersocial_pkey" PRIMARY KEY (usso_ide);


--
-- Name:  tbl_usertype_pkey; Type: CONSTRAINT; Schema: public; 
--

ALTER TABLE ONLY tbl_usertype
    ADD CONSTRAINT " tbl_usertype_pkey" PRIMARY KEY (usty_ide);


--
-- Name: city_pkey; Type: CONSTRAINT; Schema: public; 
--

ALTER TABLE ONLY tbl_city
    ADD CONSTRAINT city_pkey PRIMARY KEY (city_ide);


--
-- Name: tbl_category_pkey; Type: CONSTRAINT; Schema: public; 
--

ALTER TABLE ONLY tbl_category
    ADD CONSTRAINT tbl_category_pkey PRIMARY KEY (cate_ide);


--
-- Name: tbl_country_pkey; Type: CONSTRAINT; Schema: public; 
--

ALTER TABLE ONLY tbl_country
    ADD CONSTRAINT tbl_country_pkey PRIMARY KEY (coun_ide);


--
-- Name: tbl_liveevents_pkey; Type: CONSTRAINT; Schema: public; 
--

ALTER TABLE ONLY tbl_liveevents
    ADD CONSTRAINT tbl_liveevents_pkey PRIMARY KEY (live_ide);


--
-- Name: tbl_pemissioncrud_pkey; Type: CONSTRAINT; Schema: public; 
--

ALTER TABLE ONLY tbl_pemissioncrud
    ADD CONSTRAINT tbl_pemissioncrud_pkey PRIMARY KEY (pecr_ide);


--
-- Name: tbl_province_pkey; Type: CONSTRAINT; Schema: public; 
--

ALTER TABLE ONLY tbl_province
    ADD CONSTRAINT tbl_province_pkey PRIMARY KEY (prov_ide);


--
-- Name: tbl_rating_pkey; Type: CONSTRAINT; Schema: public; 
--

ALTER TABLE ONLY tbl_rating
    ADD CONSTRAINT tbl_rating_pkey PRIMARY KEY (rati_ide);


--
-- Name: tbl_social_pkey; Type: CONSTRAINT; Schema: public; 
--

ALTER TABLE ONLY tbl_social
    ADD CONSTRAINT tbl_social_pkey PRIMARY KEY (soci_ide);


--
-- Name: tbl_specialities_pkey; Type: CONSTRAINT; Schema: public; 
--

ALTER TABLE ONLY tbl_specialities
    ADD CONSTRAINT tbl_specialities_pkey PRIMARY KEY (spec_ide);


--
-- Name: tbl_subcategory_pkey; Type: CONSTRAINT; Schema: public; 
--

ALTER TABLE ONLY tbl_subcategory
    ADD CONSTRAINT tbl_subcategory_pkey PRIMARY KEY (suca_ide);


--
-- Name: tbl_ticket_pkey; Type: CONSTRAINT; Schema: public; 
--

ALTER TABLE ONLY tbl_ticket
    ADD CONSTRAINT tbl_ticket_pkey PRIMARY KEY (tick_ide);


--
-- Name: tbl_userlanguage_pkey; Type: CONSTRAINT; Schema: public; 
--

ALTER TABLE ONLY tbl_userlanguage
    ADD CONSTRAINT tbl_userlanguage_pkey PRIMARY KEY (usla_ide);


--
-- Name: tbl_video_pkey; Type: CONSTRAINT; Schema: public; 
--

ALTER TABLE ONLY tbl_video
    ADD CONSTRAINT tbl_video_pkey PRIMARY KEY (vide_ide);


--
-- Name: user_pkey; Type: CONSTRAINT; Schema: public; 
--

ALTER TABLE ONLY tbl_user
    ADD CONSTRAINT user_pkey PRIMARY KEY (user_ide);


--
-- Name: acce_user; Type: FK CONSTRAINT; Schema: public;
--

ALTER TABLE ONLY tbl_access
    ADD CONSTRAINT acce_user FOREIGN KEY (acce_user) REFERENCES tbl_user(user_ide) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: CONSTRAINT acce_user ON tbl_access; Type: COMMENT; Schema: public;
--

COMMENT ON CONSTRAINT acce_user ON tbl_access IS 'fk relacion entre acceso y usuario';


--
-- Name: actu_acce; Type: FK CONSTRAINT; Schema: public;
--

ALTER TABLE ONLY tbl_accesstypeuser
    ADD CONSTRAINT actu_acce FOREIGN KEY (actu_acce) REFERENCES tbl_access(acce_ide) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: CONSTRAINT actu_acce ON tbl_accesstypeuser; Type: COMMENT; Schema: public;
--

COMMENT ON CONSTRAINT actu_acce ON tbl_accesstypeuser IS 'fk autoincremental del acceso';


--
-- Name: actu_spec; Type: FK CONSTRAINT; Schema: public;
--

ALTER TABLE ONLY tbl_accesstypeuser
    ADD CONSTRAINT actu_spec FOREIGN KEY (actu_spec) REFERENCES tbl_specialities(spec_ide) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: CONSTRAINT actu_spec ON tbl_accesstypeuser; Type: COMMENT; Schema: public;
--

COMMENT ON CONSTRAINT actu_spec ON tbl_accesstypeuser IS 'fk autoincremental de las especialidades del influencer';


--
-- Name: actu_usty; Type: FK CONSTRAINT; Schema: public;
--

ALTER TABLE ONLY tbl_accesstypeuser
    ADD CONSTRAINT actu_usty FOREIGN KEY (actu_usty) REFERENCES tbl_usertype(usty_ide) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: CONSTRAINT actu_usty ON tbl_accesstypeuser; Type: COMMENT; Schema: public;
--

COMMENT ON CONSTRAINT actu_usty ON tbl_accesstypeuser IS 'fk autoincremental de tipo de ususario';


--
-- Name: city_prov; Type: FK CONSTRAINT; Schema: public;
--

ALTER TABLE ONLY tbl_city
    ADD CONSTRAINT city_prov FOREIGN KEY (city_prov) REFERENCES tbl_province(prov_ide) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: CONSTRAINT city_prov ON tbl_city; Type: COMMENT; Schema: public;
--

COMMENT ON CONSTRAINT city_prov ON tbl_city IS 'fk autoincremental de la provincia';


--
-- Name: live_actu; Type: FK CONSTRAINT; Schema: public;
--

ALTER TABLE ONLY tbl_liveevents
    ADD CONSTRAINT live_actu FOREIGN KEY (live_actu) REFERENCES tbl_accesstypeuser(actu_ide) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: CONSTRAINT live_actu ON tbl_liveevents; Type: COMMENT; Schema: public;
--

COMMENT ON CONSTRAINT live_actu ON tbl_liveevents IS 'fk autoincremental del acceso del tipo de usuario';


--
-- Name: live_request; Type: FK CONSTRAINT; Schema: public;
--

ALTER TABLE ONLY tbl_liveevents
    ADD CONSTRAINT live_request FOREIGN KEY (live_request) REFERENCES tbl_request(requ_ide) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: CONSTRAINT live_request ON tbl_liveevents; Type: COMMENT; Schema: public;
--

COMMENT ON CONSTRAINT live_request ON tbl_liveevents IS 'fk autoincremental de   la solicitud';


--
-- Name: live_video; Type: FK CONSTRAINT; Schema: public;
--

ALTER TABLE ONLY tbl_liveevents
    ADD CONSTRAINT live_video FOREIGN KEY (live_video) REFERENCES tbl_video(vide_ide) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: CONSTRAINT live_video ON tbl_liveevents; Type: COMMENT; Schema: public;
--

COMMENT ON CONSTRAINT live_video ON tbl_liveevents IS 'fk autoincremental del video';


--
-- Name: perm_actu; Type: FK CONSTRAINT; Schema: public;
--

ALTER TABLE ONLY tbl_permission
    ADD CONSTRAINT perm_actu FOREIGN KEY (perm_actu) REFERENCES tbl_accesstypeuser(actu_ide) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: CONSTRAINT perm_actu ON tbl_permission; Type: COMMENT; Schema: public;
--

COMMENT ON CONSTRAINT perm_actu ON tbl_permission IS 'fk del acceso tipo de usuario';


--
-- Name: perm_pecr; Type: FK CONSTRAINT; Schema: public;
--

ALTER TABLE ONLY tbl_permission
    ADD CONSTRAINT perm_pecr FOREIGN KEY (perm_pecr) REFERENCES tbl_pemissioncrud(pecr_ide) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: CONSTRAINT perm_pecr ON tbl_permission; Type: COMMENT; Schema: public;
--

COMMENT ON CONSTRAINT perm_pecr ON tbl_permission IS 'fk del permiso crud';


--
-- Name: perm_sumo; Type: FK CONSTRAINT; Schema: public;
--

ALTER TABLE ONLY tbl_permission
    ADD CONSTRAINT perm_sumo FOREIGN KEY (perm_sumo) REFERENCES tbl_submodule(sumo_ide) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: CONSTRAINT perm_sumo ON tbl_permission; Type: COMMENT; Schema: public;
--

COMMENT ON CONSTRAINT perm_sumo ON tbl_permission IS 'fk del permiso  submodulo';


--
-- Name: prov_country; Type: FK CONSTRAINT; Schema: public;
--

ALTER TABLE ONLY tbl_province
    ADD CONSTRAINT prov_country FOREIGN KEY (prov_country) REFERENCES tbl_country(coun_ide) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- Name: CONSTRAINT prov_country ON tbl_province; Type: COMMENT; Schema: public;
--

COMMENT ON CONSTRAINT prov_country ON tbl_province IS 'fk autoincremental del pais';


--
-- Name: rati_actu; Type: FK CONSTRAINT; Schema: public;
--

ALTER TABLE ONLY tbl_rating
    ADD CONSTRAINT rati_actu FOREIGN KEY (rati_actu) REFERENCES tbl_accesstypeuser(actu_ide) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: CONSTRAINT rati_actu ON tbl_rating; Type: COMMENT; Schema: public;
--

COMMENT ON CONSTRAINT rati_actu ON tbl_rating IS 'fk autoincremental del acceso del tipo de usuario';


--
-- Name: rati_video; Type: FK CONSTRAINT; Schema: public;
--

ALTER TABLE ONLY tbl_rating
    ADD CONSTRAINT rati_video FOREIGN KEY (rati_video) REFERENCES tbl_video(vide_ide) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: CONSTRAINT rati_video ON tbl_rating; Type: COMMENT; Schema: public;
--

COMMENT ON CONSTRAINT rati_video ON tbl_rating IS 'fk autoincremental del video';


--
-- Name: requ_emisor; Type: FK CONSTRAINT; Schema: public;
--

ALTER TABLE ONLY tbl_request
    ADD CONSTRAINT requ_emisor FOREIGN KEY (requ_emisor) REFERENCES tbl_accesstypeuser(actu_ide) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: CONSTRAINT requ_emisor ON tbl_request; Type: COMMENT; Schema: public;
--

COMMENT ON CONSTRAINT requ_emisor ON tbl_request IS 'fk autoincremental del usuario quien emite la soliciud';


--
-- Name: requ_receptor; Type: FK CONSTRAINT; Schema: public;
--

ALTER TABLE ONLY tbl_request
    ADD CONSTRAINT requ_receptor FOREIGN KEY (requ_receptor) REFERENCES tbl_accesstypeuser(actu_ide) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: CONSTRAINT requ_receptor ON tbl_request; Type: COMMENT; Schema: public;
--

COMMENT ON CONSTRAINT requ_receptor ON tbl_request IS 'fk autoincremental del usuario quien recibe la solicitud';


--
-- Name: spec_suca; Type: FK CONSTRAINT; Schema: public;
--

ALTER TABLE ONLY tbl_specialities
    ADD CONSTRAINT spec_suca FOREIGN KEY (spec_suca) REFERENCES tbl_subcategory(suca_ide) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: CONSTRAINT spec_suca ON tbl_specialities; Type: COMMENT; Schema: public;
--

COMMENT ON CONSTRAINT spec_suca ON tbl_specialities IS 'fk autoincremental de sub categoria del influencer';


--
-- Name: suca_cate; Type: FK CONSTRAINT; Schema: public;
--

ALTER TABLE ONLY tbl_subcategory
    ADD CONSTRAINT suca_cate FOREIGN KEY (suca_cate) REFERENCES tbl_category(cate_ide) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: CONSTRAINT suca_cate ON tbl_subcategory; Type: COMMENT; Schema: public;
--

COMMENT ON CONSTRAINT suca_cate ON tbl_subcategory IS 'fk autoincremental de la categoria del influencer';


--
-- Name: sumo_modu; Type: FK CONSTRAINT; Schema: public;
--

ALTER TABLE ONLY tbl_submodule
    ADD CONSTRAINT sumo_modu FOREIGN KEY (sumo_modu) REFERENCES tbl_module(modu_ide) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: CONSTRAINT sumo_modu ON tbl_submodule; Type: COMMENT; Schema: public;
--

COMMENT ON CONSTRAINT sumo_modu ON tbl_submodule IS 'fk autoincremental del modulo';


--
-- Name: tick_cupon; Type: FK CONSTRAINT; Schema: public;
--

ALTER TABLE ONLY tbl_ticket
    ADD CONSTRAINT tick_cupon FOREIGN KEY (tick_cupon) REFERENCES tbl_codepromotion(copr_ide) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: CONSTRAINT tick_cupon ON tbl_ticket; Type: COMMENT; Schema: public;
--

COMMENT ON CONSTRAINT tick_cupon ON tbl_ticket IS 'fk autoincremental del codigo del promocion';


--
-- Name: tick_liveevents; Type: FK CONSTRAINT; Schema: public;
--

ALTER TABLE ONLY tbl_ticket
    ADD CONSTRAINT tick_liveevents FOREIGN KEY (tick_liveevents) REFERENCES tbl_liveevents(live_ide) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: CONSTRAINT tick_liveevents ON tbl_ticket; Type: COMMENT; Schema: public;
--

COMMENT ON CONSTRAINT tick_liveevents ON tbl_ticket IS 'fk autoincremental del evento en vivo';


--
-- Name: user_city; Type: FK CONSTRAINT; Schema: public;
--

ALTER TABLE ONLY tbl_user
    ADD CONSTRAINT user_city FOREIGN KEY (user_city) REFERENCES tbl_city(city_ide) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: CONSTRAINT user_city ON tbl_user; Type: COMMENT; Schema: public;
--

COMMENT ON CONSTRAINT user_city ON tbl_user IS 'fk autoincremental del provincia del usuario';


--
-- Name: usla_user; Type: FK CONSTRAINT; Schema: public;
--

ALTER TABLE ONLY tbl_userlanguage
    ADD CONSTRAINT usla_user FOREIGN KEY (usla_user) REFERENCES tbl_user(user_ide) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: CONSTRAINT usla_user ON tbl_userlanguage; Type: COMMENT; Schema: public;
--

COMMENT ON CONSTRAINT usla_user ON tbl_userlanguage IS 'fk autoincremental del usuario';

--
-- Name: usla_lang; Type: FK CONSTRAINT; Schema: public;
--

ALTER TABLE ONLY tbl_userlanguage
    ADD CONSTRAINT usla_lang FOREIGN KEY (usla_lang) REFERENCES tbl_language(lang_ide) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: CONSTRAINT usla_lang ON tbl_userlanguage; Type: COMMENT; Schema: public;
--

COMMENT ON CONSTRAINT usla_lang ON tbl_userlanguage IS 'fk autoincremental del lenguaje';


--
-- Name: usso_social; Type: FK CONSTRAINT; Schema: public;
--

ALTER TABLE ONLY tbl_usersocial
    ADD CONSTRAINT usso_social FOREIGN KEY (usso_social) REFERENCES tbl_social(soci_ide) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: CONSTRAINT usso_social ON tbl_usersocial; Type: COMMENT; Schema: public;
--

COMMENT ON CONSTRAINT usso_social ON tbl_usersocial IS 'fk autoincremental de la red social del usuario';


--
-- Name: usso_user; Type: FK CONSTRAINT; Schema: public;
--

ALTER TABLE ONLY tbl_usersocial
    ADD CONSTRAINT usso_user FOREIGN KEY (usso_user) REFERENCES tbl_user(user_ide) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: CONSTRAINT usso_user ON tbl_usersocial; Type: COMMENT; Schema: public;
--

COMMENT ON CONSTRAINT usso_user ON tbl_usersocial IS 'fk autoincremental de la red social del usuario';


--
-- Name: vide_actu; Type: FK CONSTRAINT; Schema: public;
--

ALTER TABLE ONLY tbl_video
    ADD CONSTRAINT vide_actu FOREIGN KEY (vide_actu) REFERENCES tbl_accesstypeuser(actu_ide) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: public; Type: ACL; Schema: -;
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

