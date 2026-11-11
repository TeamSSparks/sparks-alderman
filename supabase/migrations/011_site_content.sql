create table if not exists site_content (
  key text primary key,
  label text not null,
  content text not null,
  updated_at timestamptz not null default now()
);

alter table site_content enable row level security;

create policy "service role only"
  on site_content
  for all
  using (false)
  with check (false);

insert into site_content (key, label, content) values
(
  'disclosure',
  'Campaign Disclosure (footer + donate page)',
  'Paid for by Friends of Samuel.

A copy of our report filed with the State Board of Elections is (or will be) available on the Board''s official website or for purchase from the State Board of Elections, Springfield, Illinois.'
),
(
  'contribution_rules',
  'Contribution Rules (donate page)',
  '## Contribution Rules
1. I am at least eighteen years old.
2. This contribution is made from my own funds, and funds are not being provided to me by another person or entity for the purpose of making this contribution.
3. I am a U.S. citizen or lawfully admitted permanent resident (i.e., green card holder).
4. I understand that by ordinance of the City of Chicago, no lobbyist registered with the Board of Ethics, or person who has done business with City within the preceding four reporting years, or person who is seeking to do business with the City, shall contribute over $1,500 during a calendar year. This includes persons doing or seeking to do business with the: City of Chicago, Chicago Transit Authority, Board of Education, Chicago Park District, Chicago City Colleges, Metropolitan Pier and Exposition Authority, Chicago Housing Authority, or Public Building Commission.

Americans living abroad may only contribute while physically in the United States. By proceeding with this transaction, you agree to PayPal''s terms & conditions.'
),
(
  'privacy_policy',
  'Privacy Policy',
  'This Privacy Policy explains how Friends of Samuel ("the campaign," "we," "us") collects, uses, and protects information you provide through sparksforchicago.org.

## Information We Collect
When you volunteer, join the movement, or contact us through a form on this site, we collect the information you submit, which may include your name, email address, phone number, home address, neighborhood, availability, areas of interest, and any message you send us. We do not collect payment or financial information through this site.

## How We Use It
We use this information to coordinate volunteers, respond to your message, send you campaign updates and event notifications by email, text, or phone, and organize outreach in the 7th Ward. We also track basic, non-identifying page activity (like whether a form was viewed) to understand which parts of the site are working, for internal campaign use only.

## How We Share It
We do not sell your information. It is used internally by the campaign and its staff and volunteers on a need-to-know basis, and may be shared with vendors who help us operate the campaign (such as our email and hosting providers), solely to provide those services to us.

## Your Choices
You can opt out of campaign communications at any time by replying to any email or text with a removal request, or by contacting us directly. To request that we delete your information, email info@sparksforchicago.org.

## Contact
Questions about this policy can be sent to info@sparksforchicago.org.'
),
(
  'terms_of_use',
  'Terms of Use',
  'By using sparksforchicago.org ("the site"), you agree to these terms. This site is operated by Friends of Samuel in support of Samuel Sparks'' campaign for 7th Ward Alderman.

## Use of the Site
You may use this site to learn about the campaign, sign up to volunteer, donate, or contact us. You agree not to misuse the site, attempt to gain unauthorized access to any part of it, or use it for any unlawful purpose.

## Content
All text, images, and other content on this site belong to Friends of Samuel or are used with permission, unless otherwise noted. You may share links to this site, but may not reproduce or repurpose its content for commercial or political purposes without our permission.

## Donations
Contributions made through this site go to Friends of Samuel and are subject to applicable Illinois campaign finance law. Contributions are not tax deductible.

## Third-Party Links
This site may link to third-party platforms, such as social media or news coverage. We aren''t responsible for the content or practices of those external sites.

## No Warranty
This site is provided "as is" without warranties of any kind. We do our best to keep information accurate and up to date, but don''t guarantee it''s error-free.

## Governing Law
These terms are governed by the laws of the State of Illinois.

## Contact
Questions about these terms can be sent to info@sparksforchicago.org.'
);
