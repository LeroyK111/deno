// Copyright 2018-2025 the Deno authors. MIT license.

mod gen;
mod structs;

pub use gen::UNSTABLE_FEATURES;
pub use structs::UnstableFeatureKind;

pub const JS_SOURCE: deno_core::FastStaticString =
  deno_core::ascii_str_include!("./gen.js");
