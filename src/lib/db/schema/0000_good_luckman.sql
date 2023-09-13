-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `platform_history` (
	`timestamp` integer PRIMARY KEY NOT NULL,
	`apy` integer,
	`total_value_locked` integer
);
--> statement-breakpoint
CREATE TABLE `tokens` (
	`pid` text PRIMARY KEY NOT NULL,
	`asset_name` text NOT NULL,
	`symbol` text NOT NULL,
	`icon` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `projects` (
	`uuid` text PRIMARY KEY NOT NULL,
	`label` text NOT NULL,
	`logo` text NOT NULL,
	`description` text NOT NULL,
	`link` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `vaults` (
	`uuid` text PRIMARY KEY NOT NULL,
	`icon` text NOT NULL,
	`label` text NOT NULL,
	`risk` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `vaults_projects` (
	`uuid` text PRIMARY KEY NOT NULL,
	`vault_uuid` integer NOT NULL,
	`project_uuid` integer NOT NULL,
	`percentage` integer NOT NULL,
	FOREIGN KEY (`project_uuid`) REFERENCES `projects`(`uuid`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`vault_uuid`) REFERENCES `vaults`(`uuid`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `vaults_tokens` (
	`id` text PRIMARY KEY NOT NULL,
	`vault_uuid` integer NOT NULL,
	`token_pid` integer NOT NULL,
	`percentage` integer NOT NULL,
	FOREIGN KEY (`token_pid`) REFERENCES `tokens`(`pid`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`vault_uuid`) REFERENCES `vaults`(`uuid`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `users_vaults` (
	`uuid` integer PRIMARY KEY NOT NULL,
	`wallet_address` text,
	`vault_id` integer,
	`deposited_amount` integer NOT NULL,
	`deposit_time` integer NOT NULL,
	`withdraw_time` integer,
	`will_earn` integer,
	`has_earned` integer,
	FOREIGN KEY (`vault_id`) REFERENCES `vaults`(`uuid`) ON UPDATE no action ON DELETE no action
);

*/